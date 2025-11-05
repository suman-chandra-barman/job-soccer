import { baseApi } from "@/redux/api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo) => {
        return {
          url: "/auth/login",
          method: "POST",
          body: userInfo,
        };
      },
      invalidatesTags:[""]
    }),
    signup: builder.mutation({
      query: (userInfo) => {
        console.log("userInfo from authapi", userInfo)
        return {
          url: "/auth/signup",
          method: "POST",
          body: userInfo,
        };
      },
      invalidatesTags:[""]

    }),
  }),
});

export const { useLoginMutation, useSignupMutation } = authApi;