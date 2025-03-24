import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import type { CreatePostInput } from "@/types";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const cursor = searchParams.get("cursor");
    const limit = parseInt(searchParams.get("limit") || "10");

    const posts = await prisma.post.findMany({
      take: limit + 1,
      ...(cursor ? { skip: 1, cursor: { id: parseInt(cursor) } } : {}),
      orderBy: { createdAt: "desc" },
    });

    const hasMore = posts.length > limit;
    const nextCursor = hasMore ? posts[limit - 1].id : undefined;
    const data = hasMore ? posts.slice(0, -1) : posts;

    return NextResponse.json({
      posts: data,
      hasMore,
      nextCursor,
    });
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
    const post = await prisma.post.create({
      data: body,
    });
    return NextResponse.json(post);
  } catch (error) {
    console.error("Failed to create post:", error);
    return NextResponse.json(
      { error: "Failed to create post" },
      { status: 500 }
    );
  }
}
