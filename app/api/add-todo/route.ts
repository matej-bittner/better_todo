import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/session";

export async function POST(request: any) {
  const user = await getCurrentUser();
  // console.log(user);

  try {
    if (!user?.email) {
      return NextResponse.json(
        { message: "not authenitificated" },
        { status: 401 },
      );
    }
    const todo_data = await request.json();
    const { title, finishDate, content } = todo_data;
    const authorId = user.id;
    // console.log(typeof finishDate);
    // return NextResponse.json({
    //   authorId,
    //   title,
    //   finishDate,
    //   content,
    // });
    const createTodo = await prisma.todo.create({
      data: {
        title,
        finishDate,
        content,
        authorId,
      },
    });
    return NextResponse.json({ createTodo }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "něco se nepovedlo" }, { status: 500 });
  }
}
// import { NextResponse } from "next/server";
// import { prisma } from "@/lib/prisma";
//
// export async function POST(request: any) {
//   const todo_data = await request.json();
//   const { title, finishDate, content } = todo_data;
//
//   if (!title || !finishDate) {
//     return new NextResponse("nevyplněno", { status: 400 });
//   }
//
//   const createTodo = await prisma.todo.create({
//     data: {
//       title,
//       finishDate,
//       content,
//       User: {},
//     },
//   });
// }
