import React from "react";
import { FaApple } from "react-icons/fa";
import { DiAndroid } from "react-icons/di";

const AppMain = () => {
  return (
    <section className=" w-full bg-gray-100 overflow-clip">
      <div className="max-w-[1440px] min-h-[calc(100vh-75px)] h-full   px-6 md:px-10 mx-auto flex flex-col  py-6  space-y-4">
        <h1 className="text-center text-4xl mx-auto">Lepší ToDo</h1>
        <div className="gap-4 flex mx-auto">
          <div className="border-2 border-black rounded-xl max-w-[550px] min-h-[350px] px-4 py-3 text-center flex flex-col justify-around ">
            <h2 className="text-2xl font-semibold">
              Nejlepší Aplikace na ToDo
            </h2>
            <p className="text-yellow-300 text-2xl drop-shadow-md">★ ★ ★ ★ ★</p>
            <p className="text-xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Asperiores eum fugiat, hic illo in inventore ipsum, iure mollitia
              quibusdam, soluta suscipit voluptate. Cupiditate earum maiores
              ullam voluptate? Aspernatur commodi cum dolorem dolores esse et
              harum hic illo iste mollitia, nisi quam quas quisquam quod saepe
              sit velit, veniam voluptatem voluptatibus.
            </p>
          </div>
          <div className="hidden border-2 border-black rounded-xl max-w-[550px] min-h-[350px] px-4 py-3 text-center md:flex flex-col justify-around">
            <h2 className="text-2xl font-semibold">
              Nejlepší Aplikace na ToDo
            </h2>
            <p className="text-yellow-300 text-2xl drop-shadow-md">★ ★ ★ ★ ★</p>
            <p className="text-xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Asperiores eum fugiat, hic illo in inventore ipsum, iure mollitia
              quibusdam, soluta suscipit voluptate. Cupiditate earum maiores
              ullam voluptate? Aspernatur commodi cum dolorem dolores esse et
              harum hic illo iste mollitia, nisi quam quas quisquam quod saepe
              sit velit, veniam voluptatem voluptatibus.
            </p>
          </div>
        </div>
        <hr className="border-black border-[1.5px] rounded-full w-[80%] mx-auto" />
        <div>
          <h2 className="text-2xl font-semibold text-center">Stahuj</h2>
          <div className="flex justify-around">
            <div className="border-2 border-black h-[60px] w-[40%] flex items-center px-2 rounded-md hover:bg-gray-200 transition-all duration-300 cursor-pointer">
              <FaApple size="45" />
              <p className="text-2xl flex-1 font-semibold text-center">Apple</p>
            </div>
            <div className="border-2 border-black h-[60px] w-[40%] flex items-center px-2 rounded-md hover:bg-gray-200 transition-all duration-300 cursor-pointer">
              <DiAndroid size="45" />
              <p className="text-2xl flex-1 font-semibold text-center">
                Android
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppMain;
