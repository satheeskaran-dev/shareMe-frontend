import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoggedInUserData: (state, { payload }) => payload,
    removeProfilePicture: (state) => ({
      ...state,
      user: { ...state.user, profileImg: "" },
    }),
    logout: () => {
      return initialState;
    },
  },
});

export const { setLoggedInUserData, removeProfilePicture, logout } =
  authSlice.actions;
export default authSlice.reducer;
