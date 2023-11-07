import prisma from "../../../../../prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: NextResponse){
    try{
        const id = req.url.split("blogs/")[1];
        await prisma.$connect();
        const post = await prisma.blog.findFirst({where: {id}});
        if(!post){
            return NextResponse.json({message:"not-foud"}, {status: 404})
        }
        return NextResponse.json({message: "success", post}, {status: 404})
    }catch(err){
        return NextResponse.json({message: "Error", err}, {status: 500})
    }finally{
        await prisma.$disconnect();
    }

}