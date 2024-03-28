import React from "react";

interface ButtonProps {
  variant?: "dark" | "light" | "ghost";
  title: string;
}

const CustomButton: React.FC<ButtonProps> = ({ variant, title }) => {
  return (
    <button
      type="submit"
      className={`flex items-center justify-center rounded-full px-4 py-3 font-light drop-shadow-md text-white min-w-[150px] text-[16px] md:text-[20px] lg:text-[22px] 
      ${variant === "dark" && "bg-[#191970]"}
      ${variant === "light" && "bg-[#B185D6]"}
      `}
    >
      {title}
    </button>
  );
};

export default CustomButton;
