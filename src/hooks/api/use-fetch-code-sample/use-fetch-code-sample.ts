import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { ROUTES } from '@/routes/constants';

import { STALE_TIME } from '../constants';

const useFetchCodeSample =  (id = '') => {
    return useQuery({
        queryKey: ['template', id],
        queryFn: () => {
            return axios.get<string | null>(`${ROUTES.BASE_URL}/python-templates/${id}.py`)
        },
        enabled: !!id,
        staleTime: STALE_TIME,
    })
};

export default useFetchCodeSample;
