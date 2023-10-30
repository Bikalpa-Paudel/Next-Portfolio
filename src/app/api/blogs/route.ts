import { NextResponse } from "next/server";
import { addPost, getPost } from "../../../../lib/allBlog";
export async function GET() {
  try {
    const posts = getPost();
    return NextResponse.json({
      blogs: posts
    });
  } catch (err) {
    return NextResponse.json({ message: "Erros", err }, { status: 500 });
  }
}
export async function POST(req: Request, res: Response) {
  const { title } = await req.json();
  const post = {
    title,
    id: Date.now().toString(),
    date: new Date().toString(),
  };
  addPost(post);
  return NextResponse.json({ blogs: post });
}
