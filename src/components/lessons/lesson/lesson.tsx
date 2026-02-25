import React from "react";
import classNames from "classnames";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link, useParams, useSearchParams } from "react-router";

import Editor from '@/components/editor';
import Markdown from '@/components/markdown';
import { Button } from "@/components/ui/button";
import { Spinner } from '@/components/ui/spinner';
import { Sidebar, SidebarProvider } from "@/components/ui/sidebar";
import useFetchLesson from "@/hooks/api/use-fetch-lesson";
import useFetchCourse from "@/hooks/api/use-fetch-course";
import useFetchCodeSample from "@/hooks/api/use-fetch-code-sample";

import SidebarTrigger from "./sidebar-trigger";

const Lesson = () => {
    const { id } = useParams();
    const [searchParams] = useSearchParams();
    const courseId = searchParams.get('course');

    const { data, error, isFetching, isLoading } = useFetchLesson(id);
    const { data: courseData } = useFetchCourse(courseId ?? '');
    const { data: codeSample } = useFetchCodeSample(id);
    const prevLesson = courseData?.tableOfContents.find(lesson => lesson.id === id)?.prevLesson;
    const nextLesson = courseData?.tableOfContents.find(lesson => lesson.id === id)?.nextLesson;
    const isLoadingState = isLoading || isFetching;

    const lessonColumnClassList = classNames(
        "h-full overflow-y-auto py-[84px] px-[15px]",
        {
            "md:pt-[126px]": nextLesson || prevLesson,
        }
    )

    const LessonTemplate = () => (
        <>
            {isLoadingState ? (
                <>
                    <Spinner /> Loading...
                </>
            ) : error ? (
                <div className='text-destructive'>Error: {error.message}</div>
            ) : (
                <Markdown>{data?.data ?? ''}</Markdown>
            )}
        </>
    );

    return (
        <SidebarProvider className="block md:flex">
            <div className="md:hidden w-full">
                <LessonTemplate />
            </div>
            <div className="hidden md:block">
                <Sidebar>
                    <div className={lessonColumnClassList}>
                        <LessonTemplate />
                    </div>
                    <SidebarTrigger className="absolute right-[-52px] top-[63px]" />
                </Sidebar>
            </div>
            <Editor codeSample={codeSample?.data} hasNavigation={Boolean(nextLesson || prevLesson)} />
            {(nextLesson || prevLesson) && (
                <div
                    className="content-center fixed w-full flex left-0 top-[64px] bg-background shadow-[4px_5px_6px_0px_rgba(0,_0,_0,_0.1)] p-[15px] z-51">
                    {prevLesson && <Button variant="outline" size="sm">
                        <ArrowLeft/>
                        <Link to={`/lessons/${prevLesson}?course=${courseId}`}>
                            Previous Lesson
                        </Link>
                    </Button>}
                    {nextLesson && <Button className="pr-auto" variant="outline" size="sm">
                        <Link to={`/lessons/${nextLesson}?course=${courseId}`}>
                            Next Lesson
                        </Link>
                        <ArrowRight/>
                    </Button>}
                </div>
            )}
        </SidebarProvider>
    );
};

export default Lesson;
