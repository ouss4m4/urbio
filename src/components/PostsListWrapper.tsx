"use client";

import dynamic from "next/dynamic";

const PostsList = dynamic(
  () => import("./PostsList").then((mod) => mod.PostsList),
  {
    ssr: false,
    loading: () => (
      <div className="animate-pulse">
        <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
        <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
        <div className="h-48 bg-gray-200 rounded-lg"></div>
      </div>
    ),
  }
);

export function PostsListWrapper() {
  return <PostsList />;
}
