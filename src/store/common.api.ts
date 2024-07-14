import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../constants/api.constants';

export const commonApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
        prepareHeaders: headers => {
            headers.set('Content-Type', 'application/json;charset=UTF-8');
            headers.set('Authorization', 'anonymous');

            return headers;
        },
    }),
    tagTypes: ['Example'],
    endpoints: _ => ({}),
});
