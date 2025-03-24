import { NextResponse } from "next/server";
import { postStore } from "@/lib/store";

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const id = await Promise.resolve(parseInt(params.id));

  try {
    const post = await postStore.getPost(id);

    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    return NextResponse.json(post);
  } catch (error) {
    console.error("Failed to fetch post:", error);
    return NextResponse.json(
      { error: "Failed to fetch post" },
      { status: 500 }
    );
  }
}
