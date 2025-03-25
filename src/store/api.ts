import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Post, PostsResponse, CreatePostInput } from "../types";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  tagTypes: ["Posts"],
  endpoints: (builder) => ({
    getPosts: builder.query<PostsResponse, { cursor?: number; limit?: number }>(
      {
        query: ({ cursor, limit = 10 }) => ({
          url: "/posts",
          params: { cursor, limit },
        }),
        providesTags: (result) =>
          result
            ? [
                ...result.posts.map(({ id }) => ({
                  type: "Posts" as const,
                  id,
                })),
                { type: "Posts", id: "LIST" },
              ]
            : [{ type: "Posts", id: "LIST" }],
      }
    ),
    getPost: builder.query<Post, number>({
      query: (id) => `/posts/${id}`,
      providesTags: (_result, _error, id) => [{ type: "Posts", id }],
    }),
    createPost: builder.mutation<Post, CreatePostInput>({
      query: (body) => ({
        url: "/posts",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Posts", id: "LIST" }],
    }),
  }),
});


export const { useGetPostsQuery, useGetPostQuery, useCreatePostMutation } = api;
