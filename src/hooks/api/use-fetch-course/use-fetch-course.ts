import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { ROUTES } from '@/routes/constants';

import { STALE_TIME } from '../constants';
import { Courses, Course } from "../types";

const useFetchCourse = (id: string | undefined) => {
    return useQuery({
        queryKey: ['course', id],
        queryFn: () => {
            const data = axios
                .get<Courses>(`${ROUTES.BASE_URL}/courses.json`)
                .then((response) => {
                    return response.data.courses.find((course: Course) => course.id === id);
                });

            return data;
        },
        staleTime: STALE_TIME,
    })
};

export default useFetchCourse;
