import prisma from "../../../../prisma";
import { NextResponse } from "next/server";
export async function main():Promise<void>{
  try{
    await prisma.$connect();
  }catch(err){
  }
}
export async function GET() {
  try {
    await main();
    const posts = await prisma.blog.findMany();
    return NextResponse.json({ message: "Success", posts }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
export async function POST(req: Request, res: NextResponse) {
  try{
    const { title, description } = await req.json();
    await main();
    const post = await prisma.blog.create({data: { description, title } });
    return NextResponse.json({message: "Success", post}, {status: 201})
  }catch(err){
    return NextResponse.json({message: "Error", err}, {status: 500})
  }finally{
    await prisma.$disconnect()
  }
}
