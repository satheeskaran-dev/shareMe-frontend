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
    getPosts: builder.query({
      query: () => ({
        url: `/post`,
      }),
      keepUnusedDataFor: 0,
      providesTags: ["Post"],
    }),
    getPost: builder.query({
      query: (id) => ({
        url: `/post/${id}`,
      }),
      keepUnusedDataFor: 0,
      providesTags: ["Post"],
    }),
    likePost: builder.mutation({
      query: ({ userId, postId, isLiked }) => ({
        url: `/post/like-post`,
        method: "POST",
        body: { userId, postId, isLiked },
      }),
      invalidatesTags: ["Post"],
    }),
    deletePost: builder.mutation({
      query: (id) => ({
        url: "/post",
        method: "DELETE",
        params: { id },
      }),
      invalidatesTags: ["Post"],
    }),
  }),
});

export const {
  useCreatePostMutation,
  useDeletePostMutation,
  useGetPostQuery,
  useGetPostsQuery,
  useLikePostMutation,
} = postService;
