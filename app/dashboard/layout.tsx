import "@/app/globals.css";

import NavLeft from "@/components/shared/dashboard/NavLeft";

import React from "react";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="w-[100vw] flex">
        <NavLeft />
        <div className="relative ml-[calc(6%+40px)] sm:ml-[calc(75vw*0.06+40px)] md:ml-[calc(50vw*0.06+40px)] lg:ml-0 flex-1 bg-gray-800 overflow-y-auto px-2 py-3 min-h-[calc(100vh-75px)]">
          {/*<ModalLayout />*/}
          {children}
        </div>
      </div>
    </>
  );
}
// import { Inter } from "next/font/google";
// import "@/app/globals.css";
//
// import NavLeft from "@/components/shared/dashboard/NavLeft";
// import ModalLayout from "@/components/shared/ModalLayout";
//
// const inter = Inter({ subsets: ["latin"] });
//
// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={`${inter.className} `}>
//         <div className="w-[100vw] flex">
//           <NavLeft />
//           <div className="relative ml-[calc(6%+40px)] sm:ml-[calc(75vw*0.06+40px)] md:ml-[calc(50vw*0.06+40px)] lg:ml-0 flex-1 bg-gray-800 overflow-y-auto px-2 py-3 min-h-[calc(100vh-75px)]">
//             <ModalLayout />
//             {children}
//           </div>
//         </div>
//       </body>
//     </html>
//   );
// }
