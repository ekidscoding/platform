import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { ROUTES } from '@/routes/constants';

import { STALE_TIME } from './constants';

const useFetchLesson =  (id = '') => {
  return useQuery({
    queryKey: ['lesson'],
    queryFn: () => {
      return axios.get<string | null>(`${ROUTES.BASE_URL}/lessons/${id}.md`)
    },
    staleTime: STALE_TIME,
  })
};

export default useFetchLesson;
