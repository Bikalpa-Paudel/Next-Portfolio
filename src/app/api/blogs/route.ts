import prisma from "@/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category");

    await prisma.$connect();
    const posts = await prisma.blog.findMany({
      where: category ? { category } : undefined,
      orderBy: { date: "desc" },
    });
    return NextResponse.json({ message: "Success", posts }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

export async function POST(req: Request) {
  try {
    const { title, description, category } = await req.json();
    await prisma.$connect();
    const post = await prisma.blog.create({
      data: {
        title,
        description,
        category: category && category.trim() ? category.trim() : "General",
      },
    });
    return NextResponse.json({ message: "Success", post }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
