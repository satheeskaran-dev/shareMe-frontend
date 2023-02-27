import apiSlice from "../api/apiSlice";

export const userService = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    removeProfile: builder.mutation({
      query: (id) => ({
        url: `/user/remove-profile/${id}`,
        method: "DELETE",
      }),
    }),
    changeProfile: builder.mutation({
      query: (id, data) => ({
        url: `/user/change-profile/${id}`,

        method: "PUT",
        body: { data },
      }),
    }),
    getUser: builder.query({
      query: (id) => ({
        url: `/user`,
        params: { id },
      }),
    }),
  }),
});

export const {
  useRemoveProfileMutation,
  useLazyGetUserQuery,
  useChangeProfileMutation,
} = userService;
