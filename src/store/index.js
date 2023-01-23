import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { combineReducers } from "redux";
import {
  persistReducer,
  PAUSE,
  FLUSH,
  REHYDRATE,
  REGISTER,
  PURGE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import themeReducer from "./features/themeSlice";
import authReducer from "./features/authSlice";
import apiSlice from "../api/apiSlice";

const persistConfig = { key: "root", storage, version: 1 };

const reducers = combineReducers({
  theme: themeReducer,
  auth: authReducer,
});
const persistedReducers = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: {
    persist: persistedReducers,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [PAUSE, FLUSH, REHYDRATE, REGISTER, PURGE],
      },
    }).concat(apiSlice.middleware),
  devTools: true,
});

setupListeners(store.dispatch);
