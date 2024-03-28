"use client";
import React, { useState } from "react";
import Link from "next/link";
import CustomLink from "@/components/shared/CustomLink";
import { signOut, useSession } from "next-auth/react";
import SignoutButton from "@/components/shared/SignoutButton";
import CustomButton from "@/components/shared/CustomButton";

const Navbar = () => {
  const { data: session } = useSession();

  const [openMenu, setOpenMenu] = useState(true);
  return (
    <nav className=" bg-black text-white w-full relative">
      <div
        className={`absolute bg-[#A36C14] w-full h-[110px] gap-4 flex flex-col sm:flex-row justify-center border-t-2 transition-all duration-600 md:hidden ${openMenu ? "-top-[110px]" : "top-[75px]"} z-20`}
      >
        <div className="flex justify-center space-x-6 text-[28px] items-center">
          <Link href="/">Domů</Link>
          <Link href="">Ceník</Link>
        </div>
        <div className="flex justify-center space-x-6 text-[28px] items-center">
          <Link href="">Kontakt</Link>
          <Link href="">Aplikace</Link>
        </div>
      </div>
      <div className="max-w-[1440px] h-[75px] py-[10px] space-x-3  px-6  md:px-10 lg:px-14 mx-auto flex justify-between items-center">
        {/*logo or menu*/}
        <div
          className="md:hidden w-fit h-[33px] flex flex-col justify-between cursor-pointer"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <div
            className={`w-[40px] h-[5px] bg-white rounded-full origin-left transition ${!openMenu && "rotate-45"}`}
          ></div>
          <div
            className={`w-[40px] h-[5px] bg-white rounded-full origin-left transition ${!openMenu && "hidden"}`}
          ></div>
          <div
            className={`w-[40px] h-[5px] bg-white rounded-full origin-left transition ${!openMenu && "-rotate-45"}`}
          ></div>
        </div>
        <div className="hidden sm:flex items-end md:hidden xl:flex w-fit ">
          <svg
            width="76"
            height="54"
            viewBox="0 0 76 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.1803 45.9619L68.1422 0L75.2133 7.07107L29.2513 53.033L22.1803 45.9619Z"
              fill="#B185D6"
            />
            <path
              d="M28.2843 53.5684L0 25.2842L7.07107 18.2131L35.3553 46.4974L28.2843 53.5684Z"
              fill="#B185D6"
            />
          </svg>
          <p className="text-xl absolute ml-10">Todo.cz</p>
        </div>

        {/*link*/}
        <div className="hidden md:flex space-x-8 w-full max-w-2xl justify-around text-[14px] md:text-[18px] lg:text-[20px]">
          <Link href="/">Domů</Link>
          <Link href="">Ceník</Link>
          <Link href="">Kontakt</Link>
          <Link href="">Aplikace</Link>
        </div>
        {/*buttons*/}
        {!session ? (
          <div className="h-full">
            <div className=" w-full h-full space-x-2 sm:space-x-4  flex">
              <CustomLink
                href="?modal=login"
                title="Přihlásit"
                variant="light"
              />
              <CustomLink
                href="?modal=register"
                title="Registrovat"
                variant="dark"
              />
            </div>
            {/*<div className="md:hidden w-full h-full flex">*/}
            {/*  <CustomLink*/}
            {/*    href="?modal=register"*/}
            {/*    title="Přihlásit/Registrovat"*/}
            {/*    variant="dark"*/}
            {/*  />*/}
            {/*</div>*/}
          </div>
        ) : (
          <div className="h-full">
            <div className=" w-full h-full space-x-4  flex">
              <SignoutButton />
              <CustomLink href="/dashboard" title="Nástěnka" variant="dark" />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
