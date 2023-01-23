import apiSlice from "../api/apiSlice";
import { logout } from "../store/features/authSlice";

export const authService = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (credential) => ({
        url: "/auth/sign-up",
        method: "POST",
        body: credential,
      }),
    }),
    logIn: builder.mutation({
      query: (credential) => ({
        url: "/auth/login",
        method: "POST",
        body: credential,
      }),
    }),
    sendLogout: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log(data);
          dispatch(logout());
          dispatch(apiSlice.util.resetApiState());
          // setTimeout(() => dispatch(apiSlice.util.resetApiState()), 1000);
        } catch (err) {
          console.log(err);
        }
      },
    }),
  }),
});

export const { useSignUpMutation, useLogInMutation, useSendLogoutMutation } =
  authService;
