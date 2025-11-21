import { baseApi } from "@/redux/api/baseApi";

const savedJobsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    saveJob: builder.mutation({
      query: (jobId: string) => ({
        url: "/saved-jobs",
        method: "POST",
        body: { jobId },
      }),
      invalidatesTags: [{ type: "Job", id: "SAVED_LIST" }],
    }),

    getSavedJobs: builder.query({
      query: () => ({
        url: "/saved-jobs",
        method: "GET",
      }),
      providesTags: (result) =>
        result?.data
          ? [
              ...result.data.map(({ _id }: { _id: string }) => ({
                type: "Job" as const,
                id: _id,
              })),
              { type: "Job", id: "SAVED_LIST" },
            ]
          : [{ type: "Job", id: "SAVED_LIST" }],
      keepUnusedDataFor: 300,
    }),

    unsaveJob: builder.mutation({
      query: (jobId: string) => ({
        url: `/saved-jobs/${jobId}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Job", id: "SAVED_LIST" }],
    }),
  }),
});

export const {
  useSaveJobMutation,
  useGetSavedJobsQuery,
  useLazyGetSavedJobsQuery,
  useUnsaveJobMutation,
} = savedJobsApi;
