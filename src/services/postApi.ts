import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://localhost:32768",
  }),
  endpoints: (builder) => ({
    getPosts: builder.mutation({
      query: (body: { title: string, text: string }) => {
        return {
          url: "/api/posts",
          method: "get",
          body,
        }
      }
    }),
    getPost: builder.mutation({
      query: (body: { id: number }) => {
        const id = body.id
        return {
          url: `/api/post/${id}`,
          method: "get",
          body,
        }
      }
    }),
    createPost: builder.mutation({
      query: (body: { title: string, text: string }) => {
        return {
          url: "/api/post",
          method: "post",
          body,
        }
      }
    }),
    deletePost: builder.mutation({
      query: (body: { id: number }) => {
        const id = body.id
        return {
          url: `/api/post/${id}`,
          method: "delete",
          body,
        }
      }
    }),
  }),
});

export const { useGetPostsMutation, useCreatePostMutation, useDeletePostMutation } = postApi;