import prisma from "../../../../prisma";
import { NextResponse } from "next/server";
// export async function main(){
//     await prisma.$connect();
// }
export async function GET() {
  try {
    // await main();
    await prisma.$connect();
    const posts = await prisma.blog.findMany();
    return NextResponse.json({ message: "Success", posts }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
export async function POST(req: Request, res: NextResponse) {
  try {
    const { title, description } = await req.json();
    // await main();
    await prisma.$connect();
    const post = await prisma.blog.create({ data: { description, title } });
    return NextResponse.json({ message: "Success", post }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

// export async function DELETE() {
//   try{
//     await prisma.$connect();

//   }
// }