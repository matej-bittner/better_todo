"use client";
import React from "react";
import { IoMdClose } from "react-icons/io";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";

import { RegistationForm } from "@/components/shared/modal/RegistationForm";
import { LoginForm } from "@/components/shared/modal/LoginForm";
import { AddTodoForm } from "@/components/shared/modal/AddTodoForm";
import { EditTodoForm } from "@/components/shared/modal/EditTodoForm";

// async function getIDx(id) {
//   const res = await fetch(`/api/get-todo/${id}`, {
//     // method: "GET",
//     // headers: { "Content-type": "application.json" },
//     cache: "no-store",
//   });
//   if (!res.ok) {
//     throw new Error("něco se nepovedlo");
//   }
//
//   return res.json();
// }

const ModalLayout = () => {
  const searchParams = useSearchParams();
  const modal = searchParams.get("modal");

  let id;
  // let x;

  // if (modal === "edit") {
  //   id = searchParams.get("id");
  //   x =  TADY MUSÍ BEJT AWAIT  getIDx(id);
  //
  //   console.log(x);
  // }

  const pathname = usePathname();

  if (!modal) {
    return null;
  } else {
    return (
      <div
        className={`${modal === "register" || modal === "login" ? "backdrop-blur-[2px]" : "bg-white/10 backdrop-blur-sm"}  absolute top-0 right-0 w-full h-full z-20 flex items-center justify-center`}
      >
        <div className="bg-white w-[94%] sm:w-[70%] max-w-[450px] min-h-[500px] h-[60%] max-h-[800px] rounded-xl relative px-2 py-3 shadow-md flex flex-col border-2 border-black">
          <Link href={pathname} className="absolute top-2 right-2">
            <IoMdClose size="30" />
          </Link>
          <div className="text-center underline text-2xl">
            <h1>
              {modal === "login"
                ? "Přihlásit"
                : modal === "register"
                  ? "Registrovat"
                  : modal === "add"
                    ? "Vytvořit"
                    : "Editovat"}
            </h1>
          </div>
          <div className="h-full flex-1 ">
            {modal === "login" ? (
              <LoginForm />
            ) : modal === "register" ? (
              <RegistationForm />
            ) : modal === "add" ? (
              <AddTodoForm />
            ) : (
              <EditTodoForm />
            )}
          </div>
        </div>
      </div>
    );
  }
};

export default ModalLayout;
// "use client";
// import React from "react";
// import { IoMdClose } from "react-icons/io";
// import { usePathname, useSearchParams } from "next/navigation";
// import Link from "next/link";
// import { EditForm } from "@/components/shared/dashboard/DashboardForm";
// import { RegistationForm } from "@/components/shared/RegistationForm";
// import { LoginForm } from "@/components/shared/LoginForm";
//
// const ModalLayout = () => {
//   const searchParams = useSearchParams();
//   const modal = searchParams.get("modal");
//   const pathname = usePathname();
//   console.log(pathname);
//   return (
//     <>
//       {modal && (
//         <div
//           className={`${modal === "register" || modal === "login" ? "backdrop-blur-[2px]" : "bg-white/10 backdrop-blur-sm"}  absolute top-0 right-0 w-full h-full z-20 flex items-center justify-center`}
//         >
//           <div className="bg-white w-[94%] sm:w-[70%] max-w-[450px] min-h-[500px] h-[60%] max-h-[800px] rounded-xl relative px-2 py-3 shadow-md flex flex-col border-2 border-black">
//             <Link href={pathname} className="absolute top-2 right-2">
//               <IoMdClose size="30" />
//             </Link>
//             <div className="text-center underline text-2xl">
//               <h1>
//                 {modal === "login"
//                   ? "Přihlásit"
//                   : modal === "register"
//                     ? "Registrovat"
//                     : modal === "add"
//                       ? "Vytvořit"
//                       : "Nastavení"}
//               </h1>
//             </div>
//             <div className="h-full flex-1 ">
//               {modal === "login" ? (
//                 <LoginForm />
//               ) : modal === "register" ? (
//                 <RegistationForm />
//               ) : modal === "add" ? (
//                 <EditForm add />
//               ) : (
//                 <EditForm />
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };
//
// export default ModalLayout;
