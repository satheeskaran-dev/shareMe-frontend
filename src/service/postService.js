import apiSlice from "../api/apiSlice";

export const postService = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createPost: builder.mutation({
      query: ({ userId, data }) => ({
        url: "/post/create-post",
        method: "POST",
        body: data,
        params: { userId },
      }),
      invalidatesTags: ["Post"],
    }),
  }),
});

export const { useCreatePostMutation } = postService;
