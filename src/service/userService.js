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
  }),
});

export const { useRemoveProfileMutation, useLazyGetUserQuery } = userService;
