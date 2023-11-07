import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;
declare global {
  namespace NodeJS {
    interface Global {
      prisma: PrismaClient;
    }
  }
}

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
}else{
  prisma = new PrismaClient();
}

export default prisma;