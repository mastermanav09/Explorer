import { Post } from "@/lib/models/post";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  try {
    const { slug } = params;

    await connectToDb();
    const post = await Post.findOne({ slug });
    return NextResponse.json(post);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch post!");
  }
};

export async function DELETE(request, { params }) {
  try {
    const { slug } = params;

    await connectToDb();
    await Post.deleteOne({ slug });
    return NextResponse.json({
      message: "Deleted Successfully!",
    });
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete post!");
  }
}
