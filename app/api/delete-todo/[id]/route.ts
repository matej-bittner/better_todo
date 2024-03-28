import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function DELETE(request: any, { params }: any) {
  const id = params.id;
  await prisma.todo.delete({
    where: { id },
  });

  return NextResponse.json(request);
}
