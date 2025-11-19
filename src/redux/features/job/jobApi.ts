import { baseApi } from "@/redux/api/baseApi";

const jobApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getJobsWithFilters: builder.mutation({
      query: (filters) => ({
        url: "/job",
        method: "GET",
        params: filters,
      }),
    }),

    getNewFourJobs: builder.mutation({
      query: () => ({
        url: "/job/last-four",
        method: "GET",
      }),
    }),

    getSingleJob: builder.mutation({
      query: (id) => ({
        url: `/job/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetJobsWithFiltersMutation,
  useGetNewFourJobsMutation,
  useGetSingleJobMutation,
} = jobApi;
