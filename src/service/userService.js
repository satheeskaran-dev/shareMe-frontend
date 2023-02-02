import apiSlice from "../api/apiSlice";

export const userService = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    removeProfile: builder.mutation({
      query: (id) => ({
        url: `/user/remove-profile`,
        method: "DELETE",
        params: id,
      }),
    }),
  }),
});

export const { useRemoveProfileMutation } = userService;
