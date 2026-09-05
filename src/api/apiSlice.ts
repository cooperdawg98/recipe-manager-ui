import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Defines the tags used to define caches and invalidate them
const tagTypes = [] as const;

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }), // Can tranform response, add to baseUrl, format headers etc
  tagTypes,
  endpoints: () => ({}),
});
