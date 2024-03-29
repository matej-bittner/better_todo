import React from "react";
import { EditTodoForm } from "@/components/shared/modal/EditTodoForm";

async function getIDx(id: string) {
  const res = await fetch(`http://localhost:3000/api/get-todo/${id}`, {
    // method: "GET",
    // headers: { "Content-type": "application.json" },
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("něco se nepovedlo");
  }

  return res.json();
}
const Page = async ({ params }: any) => {
  const id = params.id;

  let x;
  x = await getIDx(id);
  x = x.found;

  return (
    <div className="w-full h-full bg-orange-400 flex items-center justify-center">
      <div className="bg-white w-[94%] sm:w-[70%] max-w-[450px] min-h-[500px] h-[60%] max-h-[800px] rounded-xl relative px-2 py-3 shadow-md flex flex-col border-2 border-black ">
        <EditTodoForm todoValues={x} />
      </div>
    </div>
  );
};

export default Page;
