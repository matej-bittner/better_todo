// "use client";
// import React from "react";
// import { IoMdClose } from "react-icons/io";
// import { usePathname, useSearchParams } from "next/navigation";
// import Link from "next/link";
//
// const MainModal = () => {
//   const searchParams = useSearchParams();
//   const modal = searchParams.get("modal");
//   const pathname = usePathname();
//
//   console.log(modal);
//   return (
//     <>
//       {modal && (
//         <div className="bg-white/10 backdrop-blur-sm absolute top-0 right-0 w-full h-full z-20 flex items-center justify-center">
//           <div className="bg-white w-[94%] sm:w-[70%] max-w-[450px] min-h-[500px] h-[60%] max-h-[800px] rounded-xl relative px-2 py-3 shadow-md flex flex-col border-2 border-black">
//             <Link href={pathname} className="absolute top-2 right-2">
//               <IoMdClose size="30" />
//             </Link>
//             <div className="text-center underline text-2xl">
//               <h1>Nastavení</h1>
//             </div>
//             <div className="h-full flex-1 ">
//               <form
//                 action=""
//                 className="modal-form flex flex-col space-y-2 h-full"
//               >
//                 <label htmlFor="">Popis</label>
//                 <input type="text" />
//
//                 <label htmlFor="">Datum</label>
//                 <input type="date" />
//
//                 <label htmlFor="">Doplňující informace</label>
//                 <textarea className="flex-1 resize-none" />
//                 <button className="bg-gray-600 rounded-full px-4 py-2 text-white">
//                   Editovat
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };
//
// export default MainModal;
