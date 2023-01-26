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
    logout: () => {
      return initialState;
    },
  },
});

export const { setLoggedInUserData, logout } = authSlice.actions;
export default authSlice.reducer;
