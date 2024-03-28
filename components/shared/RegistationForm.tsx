import { FaApple, FaGoogle } from "react-icons/fa";
import CustomButton from "@/components/shared/CustomButton";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";

type Inputs = {
  name: string;
  surname: string;
  email: string;
  password: string;
};
export function RegistationForm() {
  const { toast } = useToast();
  const { register, handleSubmit, reset } = useForm<Inputs>();
  const createUser: SubmitHandler<Inputs> = async (registerData) => {
    try {
      await axios.post("/api/register", registerData);
      reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Oops! Něco se nepovedlo.",
        variant: "destructive",
      });
    }
  };
  return (
    <form
      onSubmit={handleSubmit(createUser)}
      className="flex flex-col gap-2 w-full h-full items-center"
    >
      <div
        className={`flex flex-col sm:flex-row  justify-between w-full items-center`}
      >
        <div className="flex flex-col sm:w-[49%] w-[80%] ">
          <label htmlFor="">Jméno</label>
          <input type="text" {...register("name")} />
        </div>
        <div className="flex flex-col sm:w-[49%] w-[80%]">
          <label htmlFor="">Příjmení</label>
          <input type="text" {...register("surname")} />
        </div>
      </div>

      <div className="flex flex-col w-[80%] sm:w-full">
        <label htmlFor="">Email</label>
        <input type="email" {...register("email")} />
      </div>
      <div className="flex flex-col w-[80%] sm:w-full">
        <label htmlFor="">Heslo</label>
        <input type="password" {...register("password")} />
      </div>
      <hr className="border-2 border-black w-[90%] rounded-full" />
      <div className="w-full flex justify-around">
        <div className="border-2 border-black rounded-md flex items-center justify-center gap-4 bg-gray-600 w-1/3 h-[50px]">
          <FaGoogle size="30" />
          <p>Google</p>
        </div>
        <hr className="border-[1px] rounded-full border-black h-[80%] my-auto" />
        <div className="border-2 border-black rounded-md flex items-center justify-center gap-4 bg-gray-600 w-1/3 h-[50px]">
          <FaApple size="33" />
          <p>Apple</p>
        </div>
      </div>
      <div className=" w-full flex items-center justify-center flex-1">
        <CustomButton title="Registrovat" variant="light" />
      </div>
    </form>
  );
}
