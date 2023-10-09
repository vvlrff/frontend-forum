import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPost } from "../models/IPost";
import { setUser } from "../features/authSlice";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://localhost:7084",
    prepareHeaders: (headers, { getState }) => {
      const token = JSON.parse(localStorage.getItem('user') || '{}')?.accessToken;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAllPosts: builder.query<IPost[], number>({
      query: (limit: number) => ({
        url: "/api/post",
      })
    }),
    getPost: builder.query<IPost, string>({
      query: (id: string) => ({
        url: `/api/post/${id}`,
      })
    }),
    createPost: builder.mutation<IPost, IPost>({
      query: (post) => {
        return {
          url: "/api/post",
          method: "POST",
          body: post
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

export const { useGetPostQuery, useGetAllPostsQuery, useCreatePostMutation, useDeletePostMutation } = postApi;