import { NextResponse } from "next/server";
import { postStore } from "@/lib/store";
import type { CreatePostInput } from "@/types";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const cursor = searchParams.get("cursor");
    const limit = parseInt(searchParams.get("limit") || "10");

    const result = await postStore.getPosts(
      cursor ? parseInt(cursor) : undefined,
      limit
    );

    return NextResponse.json(result);
  } catch (error) {
    console.error("Failed to fetch posts:", error);
    return NextResponse.json(
      { error: "Failed to fetch posts" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body: CreatePostInput = await request.json();
    const post = await postStore.createPost(body);
    return NextResponse.json(post);
  } catch (error) {
    console.error("Failed to create post:", error);
    return NextResponse.json(
      { error: "Failed to create post" },
      { status: 500 }
    );
  }
}
