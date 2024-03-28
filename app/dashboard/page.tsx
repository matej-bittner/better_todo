import React from "react";
import { CiCirclePlus } from "react-icons/ci";

import { TodoItem } from "@/components/shared/dashboard/TodoItem";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getCurrentUser } from "@/lib/session";
import { prisma } from "@/lib/prisma";

async function getTodoFromDb() {
  const user = await getCurrentUser();
  const todo = await prisma.todo.findMany({
    where: {
      // authorId: "25070545-44f1-4342-bb12-d4ff02346d6c",
      authorId: user?.id,
    },
    orderBy: {
      finishDate: "asc",
    },
  });
  return todo;
}
const Page = async () => {
  const todos = await getTodoFromDb();
  // const session = await getServerSession(authOptions);
  // console.log(session);
  const user = await getCurrentUser();
  // console.log(user?.email);
  return (
    <section className="text-white space-y-2">
      <div className="w-fit mx-auto flex flex-col items-center space-y-2">
        {/*<p>{session?.user.surname}</p>*/}
        <div>
          <h1 className="text-2xl sm:text-3xl">Veškeré Todo</h1>
        </div>
        <div className=" items-center flex gap-2">
          <Link href="?modal=add">
            <CiCirclePlus
              className="hover:scale-110 transition text-[35px] sm:text-[40px]"
              // size="40"
            />
          </Link>
          <p>Přidat</p>
        </div>
      </div>
      <div className="space-y-3">
        {todos.map((item) => (
          <TodoItem
            title={item.title}
            content={item.content}
            finishDate={item.finishDate}
            id={item.id}
            key={item.id}
          />
        ))}
      </div>
    </section>
  );
};

export default Page;
