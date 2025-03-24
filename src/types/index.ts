export interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  excerpt: string;
  createdAt: string;
  updatedAt: string;
}

export interface PostsResponse {
  posts: Post[];
  hasMore: boolean;
  nextCursor?: number;
}

export interface CreatePostInput {
  title: string;
  content: string;
  author: string;
  excerpt: string;
}

export interface ApiResponse<T> {
  data?: T;
  error?: string;
}
