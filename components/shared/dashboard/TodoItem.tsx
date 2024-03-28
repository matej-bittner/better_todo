import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { IoMdClose } from "react-icons/io";
import React from "react";
import Link from "next/link";
import DeleteTodoButton from "@/components/shared/dashboard/DeleteTodoButton";

interface todoItemProps {
  title: string;
  content?: string | null;
  finishDate: string;
  id: string;
}
export function TodoItem({ title, content, finishDate, id }: todoItemProps) {
  return (
    <Accordion type="single" collapsible className="w-full relative">
      <AccordionItem value="item-1">
        <div className="bg-white w-full max-w-[800px] min-h-[78px] rounded-md border-4 border-black py-1 px-4 flex items-center text-black justify-between gap-2 mx-auto">
          {/*hamburger*/}
          <Link
            href="?modal=edit"
            className="h-[30px] w-fit sm:flex flex-col justify-around  hidden"
          >
            <div className="w-[30px] h-[3px] bg-black"></div>
            <div className="w-[30px] h-[3px] bg-black"></div>
            <div className="w-[30px] h-[3px] bg-black"></div>
          </Link>
          {/*showmore*/}
          <AccordionTrigger className={`${!content && "sm:hidden"}`} />
          {/*text*/}
          <div className="flex justify-between flex-1 relative flex-col sm:flex-row ">
            <p>{title}</p>
            <p className="text-[14px] sm:text-base">{finishDate}</p>
          </div>
          {/*<div className="flex justify-between flex-1 relative">*/}
          {/*  <p>{title}</p>*/}
          {/*  <p className="hidden sm:block">{finishDate}</p>*/}
          {/*</div>*/}
          {/*delete*/}
          <div className="cursor-pointer flex">
            {/*<IoMdClose size="30" />*/}
            <DeleteTodoButton id={id} />
          </div>
        </div>
        {/*content hidden*/}
        <AccordionContent>
          <div
            className={`w-full px-4 flex-col flex gap-2 py-1 ${!content && "sm:hidden"}`}
          >
            {content && <h1>Popis</h1>}

            {/*<p className="sm:hidden">{finishDate}</p>*/}
            {content && <p>{content}</p>}

            <Link
              href="?modal=edit"
              className="sm:hidden bg-black w-fit mx-auto px-2 py-1 rounded-md font-semibold"
            >
              Editovat
            </Link>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
