import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoggedInUserData: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logout: () => {
      return initialState;
    },
  },
});

export const { setLoggedInUserData, logout } = authSlice.actions;
export default authSlice.reducer;
