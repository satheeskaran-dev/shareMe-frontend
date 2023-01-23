import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000",
  credentials: "include",
  //   prepareHeaders: (headers, { getState }) => {
  //     const token = getState().auth.token;
  //     if(token){
  //         headers.set('authorization',`Bearer ${token}`)
  //     }
  //     return headers
  //   },
});

// const baseQueryWithReauth = async (args, api, extraOptions) => {
//     // console.log(args) // request url, method, body
//   // console.log(api) // signal, dispatch, getState()
//   // console.log(extraOptions) //custom like {shout: true}

//   let result = await baseQuery(args,api,extraOptions);

//   if(result?.error?.status === 403){
//     //send refresh token request
//     const refreshResult = await baseQuery('/auth/refresh',api,extraOptions)
//   }
// };

const apiSlice = createApi({
  baseQuery: baseQuery,
  tagTypes: [""],
  endpoints: (builder) => ({}),
});

export default apiSlice;
