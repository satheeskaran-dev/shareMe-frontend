import apiSlice from "../api/apiSlice";

export const authService = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (credential) => ({
        url: "/auth/sign-up",
        method: "POST",

        body: credential,
      }),
    }),
  }),
});

export const { useSignUpMutation } = authService;
