import prisma from "@/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await prisma.$connect();
    const posts = await prisma.blog.findMany({
      select: { category: true },
    });

    const counts = new Map<string, number>();
    for (const p of posts) {
      const key = (p.category && p.category.trim()) || "General";
      counts.set(key, (counts.get(key) || 0) + 1);
    }

    const categories = Array.from(counts.entries())
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count);

    return NextResponse.json(
      { message: "Success", categories },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
