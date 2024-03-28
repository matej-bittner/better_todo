import React from "react";
import Link from "next/link";

interface ButtonProps {
  variant?: "dark" | "light" | "ghost";
  title: string;
  href: string;
}

const CustomLink: React.FC<ButtonProps> = ({ variant, title, href }) => {
  return (
    <Link
      href={href}
      className={`flex items-center justify-center rounded-full px-2 sm:px-4 font-light drop-shadow-md text-white min-w-[120px] sm:min-w-[150px] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] 
      ${variant === "dark" && "bg-[#191970]"}
      ${variant === "light" && "bg-[#B185D6]"}
      `}
    >
      {title}
    </Link>
  );
};

export default CustomLink;
