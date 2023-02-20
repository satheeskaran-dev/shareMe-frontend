import apiSlice from "../api/apiSlice";

export const userService = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    removeProfile: builder.mutation({
      query: (id) => ({
        url: `/user/remove-profile/${id}`,
        method: "DELETE",
      }),
    }),
    getUser: builder.query({
      query: (id) => ({
        url: `/user`,
        params: { id },
      }),
    }),
    getUserPost: builder.query({
      query: (id) => ({
        url: `/user/${id}`,
      }),
      keepUnusedDataFor: 0,
      providesTags: ["Post"],
    }),
  }),
});

export const {
  useRemoveProfileMutation,
  useLazyGetUserQuery,
  useGetUserPostQuery,
} = userService;
