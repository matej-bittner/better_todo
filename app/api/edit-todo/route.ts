import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PUT(request: any) {
  try {
    const edit_data = await request.json();
    const { title, content, finishDate, id } = edit_data;

    await prisma.todo.update({
      where: { id },
      data: {
        title,
        content,
        finishDate,
      },
    });

    return NextResponse.json({ request }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "něco se nepovedlo" }, { status: 500 });
  }
}
