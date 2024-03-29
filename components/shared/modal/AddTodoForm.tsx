"use client";
import React from "react";
import { useToast } from "@/components/ui/use-toast";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

type Inputs = {
  title: string;
  content?: string;
  finishDate?: string;
};
export const AddTodoForm = () => {
  const router = useRouter();
  // const { data: session } = useSession();
  // console.log(session?.user.email);
  const { toast } = useToast();
  const { register, handleSubmit, reset } = useForm<Inputs>();
  const createTodo: SubmitHandler<Inputs> = async (todoData) => {
    try {
      await axios.post("/api/add-todo", todoData);
      router.push("/dashboard");
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form
      onSubmit={handleSubmit(createTodo)}
      className="modal-form flex flex-col space-y-2 h-full"
    >
      <label htmlFor="">Popis</label>
      <input type="text" {...register("title")} />

      <label htmlFor="">Datum</label>
      <input type="date" {...register("finishDate")} />

      <label htmlFor="">Doplňující informace</label>
      <textarea className="flex-1 resize-none" {...register("content")} />
      <button
        type="submit"
        className="bg-gray-600 rounded-full px-4 py-2 text-white"
      >
        Přidat
      </button>
    </form>
  );
};
// import React from "react";
// import { useToast } from "@/components/ui/use-toast";
// import { SubmitHandler, useForm } from "react-hook-form";
// import axios from "axios";
//
// type Inputs = {
//   title: string;
//   content?: string;
//   finishDate?: string;
// };
// export  function AddTodoForm() {
//   const { toast } = useToast();
//   const { register, handleSubmit, reset } = useForm<Inputs>();
//   const createTodo: SubmitHandler<Inputs> = async (todoData) => {
//     try {
//       await axios.post("/api/add-todo", todoData);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   return (
//     <form
//       onSubmit={handleSubmit(createTodo)}
//       className="modal-form flex flex-col space-y-2 h-full"
//     >
//       <label htmlFor="">Popis</label>
//       <input type="text" {...register("title")} />
//
//       <label htmlFor="">Datum</label>
//       <input type="date" {...register("finishDate")} />
//
//       <label htmlFor="">Doplňující informace</label>
//       <textarea className="flex-1 resize-none" {...register("content")} />
//       <button
//         type="submit"
//         className="bg-gray-600 rounded-full px-4 py-2 text-white"
//       >
//         Přidat
//       </button>
//     </form>
//   );
// }
