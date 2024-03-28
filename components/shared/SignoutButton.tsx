import React from "react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const SignoutButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() =>
        signOut({
          redirect: true,
          callbackUrl: "/",
        })
      }
      className="flex items-center justify-center rounded-full px-4 py-3 font-light drop-shadow-md text-white min-w-[120px] sm:min-w-[150px] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] bg-[#B185D6]"
    >
      Odhlásit
    </button>
  );
};

export default SignoutButton;
