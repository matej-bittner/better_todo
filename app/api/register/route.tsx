import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";
export async function POST(request: any) {
  const register_data = await request.json();
  const { name, surname, password, email } = register_data;

  if (!name || !surname || !password || !email) {
    return new NextResponse("nevyplněno", { status: 400 });
  }

  const exist = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (exist) {
    return null;
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      name,
      surname,
      password: hashedPassword,
      email,
    },
  });
  return NextResponse.json(user);
}
