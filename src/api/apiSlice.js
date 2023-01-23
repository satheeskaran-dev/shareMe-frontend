import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "/api",
  credentials: "include",
});

const apiSlice = createApi({
  baseQuery: baseQuery,
  tagTypes: [""],
  endpoints: (builder) => ({}),
});

export default apiSlice;
