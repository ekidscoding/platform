import CourseIntro from "@/components/course/course-intro";
import React from "react";
import { useParams } from "react-router";

import { Spinner } from "@/components/ui/spinner";
import useFetchCourse from "@/hooks/api/use-fetch-course";

import Empty from "./empty";

const Course = () => {
    const { id } = useParams();
    const { data, error, isFetching, isLoading } = useFetchCourse(id);
    const isLoadingState = isLoading || isFetching;

    return (
        <div className="pt-[84px]">
            {isLoadingState ? (
                <>
                    <Spinner /> Loading...
                </>
            ) : error ? (
                <div className='text-destructive'>Error: {error.message}</div>
            ) : data ? <CourseIntro course={data} /> : <Empty />}
        </div>
    );
};

export default Course;
