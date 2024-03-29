import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: any, { params }: any) {
  try {
    const { id } = params;

    const found = await prisma.todo.findUnique({ where: { id } });

    return NextResponse.json({ found }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "eror" });
  }
}
