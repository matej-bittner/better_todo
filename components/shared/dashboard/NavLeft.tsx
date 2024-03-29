"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";

const NavLeft = () => {
  const [openNav, setOpenNav] = useState(true);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading)
    return (
      <div
        className={`h-[calc(100vh-75px)] w-[100vw] sm:w-[75vw] md:w-[50vw] lg:w-[30vw] xl:w-[25vw] 2xl:w-[20vw] top-[75px] bg-black/60`}
      ></div>
    );
  return (
    <nav
      className={`fixed z-10 lg:sticky h-[calc(100vh-75px)] w-[100vw] sm:w-[75vw] md:w-[50vw] lg:w-[30vw] xl:w-[25vw] 2xl:w-[20vw] top-[75px] lg:top-0 ${openNav && "-translate-x-[calc(100vw-6%-40px)] sm:-translate-x-[calc(75vw-6%-40px)] md:-translate-x-[calc(50vw-6%-40px)]"} flex flex-col bg-gray-500 text-white transition-all duration-600 lg:translate-x-0 "}`}
    >
      <div className="relative">
        <h1 className="text-[40px] font-light text-center">Nástěnka</h1>
        <div
          className="absolute top-4 right-[3%] w-fit h-[33px] flex flex-col justify-between cursor-pointer lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          <div
            className={`w-[40px] h-[5px] bg-white rounded-full origin-left transition-all duration-600 ${!openNav && "rotate-45"}`}
          ></div>
          <div
            className={`w-[40px] h-[5px] bg-white rounded-full origin-left transition-all duration-600 ${!openNav && "hidden"}`}
          ></div>
          <div
            className={`w-[40px] h-[5px] bg-white rounded-full origin-left transition-all duration-600 ${!openNav && "-rotate-45"}`}
          ></div>
        </div>
        <div
          className={`absolute w-fit right-0 mr-[calc(18px+3%)] origin-right -rotate-90 text-3xl lg:hidden ${!openNav && "hidden"}`}
        >
          <h1>Nástěnka</h1>
        </div>
      </div>
      <div className="flex flex-col text-[36px] flex-1 font-light gap-4 pl-4">
        <Link href="?tommorow=true">Dnes</Link>
        <Link href="">Zítra</Link>
        <Link href="">Tento týden</Link>
        <Link href="">Vše</Link>
      </div>
      <div className=" flex flex-col items-center gap-4 font-light py-3">
        <h2 className="text-[32px]">Počet Todo: 22</h2>
        <div className="w-[100px] aspect-square bg-[#191970] rounded-full flex items-center justify-center cursor-pointer">
          <FaPlus size="60" className="text-white" />
        </div>
      </div>
    </nav>
  );
};

export default NavLeft;
