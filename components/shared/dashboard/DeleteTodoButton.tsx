"use client";
import React from "react";
import { IoMdClose } from "react-icons/io";

import { NextResponse } from "next/server";
import { useRouter } from "next/navigation";
import axios from "axios";

interface DeleteTodoButtonProps {
  id: string;
}
const DeleteTodoButton = ({ id }: DeleteTodoButtonProps) => {
  const router = useRouter();
  const handleDeleteTodo = async () => {
    try {
      await axios.delete(`/api/delete-todo/${id}`);
      router.refresh();
    } catch (error) {
      return NextResponse.json("něco se nepovedlo", { status: 500 });
    }
  };

  return (
    <button onClick={handleDeleteTodo} className="w-fit h-fit">
      <IoMdClose size="30" />
    </button>
  );
};

export default DeleteTodoButton;
