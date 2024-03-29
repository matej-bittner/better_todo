"use client";
import React from "react";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useRouter } from "next/navigation";

const schema = z.object({
  title: z.string(),
  finishDate: z.string(),
  content: z.string().optional(),
});
type FormFields = z.infer<typeof schema>;
export const EditTodoForm = ({ todoValues }: any) => {
  const router = useRouter();
  const { id, title, content, finishDate } = todoValues;
  const { register, handleSubmit } = useForm<FormFields>({
    defaultValues: { title: title, content: content, finishDate: finishDate },
    resolver: zodResolver(schema),
  });

  const handleEditTodo: SubmitHandler<FormFields> = async (editData) => {
    try {
      const allData = Object.assign({}, editData, { id });
      await axios.put(`/api/edit-todo`, allData);

      router.push("/dashboard");
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleEditTodo)}
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
        Editovat
      </button>
    </form>
  );
};
