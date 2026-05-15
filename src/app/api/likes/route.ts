import prisma from "@/prisma";
import { NextResponse } from "next/server";

const KEY = "site-likes";

export async function GET() {
  try {
    await prisma.$connect();
    const row = await prisma.siteStat.findUnique({ where: { key: KEY } });
    return NextResponse.json({ count: row?.count ?? 0 }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

export async function POST() {
  try {
    await prisma.$connect();
    const row = await prisma.siteStat.upsert({
      where: { key: KEY },
      update: { count: { increment: 1 } },
      create: { key: KEY, count: 1 },
    });
    return NextResponse.json({ count: row.count }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
