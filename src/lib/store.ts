import { Post, CreatePostInput } from "@/types";
import postsData from "@/data/posts.json";

class PostStore {
  private posts: Post[];
  private nextId: number;

  constructor() {
    this.posts = [...postsData.posts];
    this.nextId = Math.max(...this.posts.map((p) => p.id)) + 1;
  }

  async getPosts(
    cursor?: number,
    limit: number = 10
  ): Promise<{ posts: Post[]; hasMore: boolean; nextCursor?: number }> {
    let startIndex = 0;
    if (cursor) {
      startIndex = this.posts.findIndex((p) => p.id === cursor) + 1;
    }

    const paginatedPosts = this.posts
      .slice(startIndex, startIndex + limit + 1)
      .sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );

    const hasMore = paginatedPosts.length > limit;
    const posts = hasMore ? paginatedPosts.slice(0, -1) : paginatedPosts;
    const nextCursor = hasMore ? posts[posts.length - 1].id : undefined;

    return { posts, hasMore, nextCursor };
  }

  async getPost(id: number): Promise<Post | null> {
    return this.posts.find((p) => p.id === id) || null;
  }

  async createPost(input: CreatePostInput): Promise<Post> {
    const now = new Date().toISOString();
    const newPost: Post = {
      id: this.nextId++,
      ...input,
      createdAt: now,
      updatedAt: now,
    };
    this.posts.unshift(newPost);
    return newPost;
  }
}

// Export a singleton instance
export const postStore = new PostStore();
