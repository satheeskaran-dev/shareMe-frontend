import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
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
import apiSlice from "../api/apiSlice";

const persistConfig = { key: "root", storage, version: 1 };
const persistedThemeReducer = persistReducer(persistConfig, themeReducer);

export const store = configureStore({
  reducer: {
    theme: persistedThemeReducer,
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
