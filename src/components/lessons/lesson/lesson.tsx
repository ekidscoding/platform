import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import React from "react";
import { Link, useParams, useSearchParams } from 'react-router';

import Editor from '@/components/editor';
import Markdown from '@/components/markdown';
import { Spinner } from '@/components/ui/spinner';
import { Sidebar, SidebarProvider } from "@/components/ui/sidebar";
import useFetchLesson from "@/hooks/api/use-fetch-lesson";
import useFetchCourse from "@/hooks/api/use-fetch-course";

import SidebarTrigger from "./sidebar-trigger";

const Lesson = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const courseId = searchParams.get('course');

  const { data, error, isFetching, isLoading } = useFetchLesson(id);
  const { data: courseData } = useFetchCourse(courseId ?? '');
  const prevLesson = courseData?.tableOfContents.find(lesson => lesson.id === id)?.prevLesson;
  const nextLesson = courseData?.tableOfContents.find(lesson => lesson.id === id)?.nextLesson;
  const isLoadingState = isLoading || isFetching;

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
                  <div className="h-full overflow-y-auto py-[84px] px-[15px]">
                      <LessonTemplate />
                  </div>
                  <SidebarTrigger className="absolute right-[-52px] top-[63px]" />
              </Sidebar>
          </div>
          <Editor />
          {(nextLesson || prevLesson) && (
              <div
                  className="fixed w-full flex justify-between left-0 bottom-0 bg-background shadow-[0px_-5px_6px_0px_rgba(0,_0,_0,_0.1)] p-[15px] z-10">
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
