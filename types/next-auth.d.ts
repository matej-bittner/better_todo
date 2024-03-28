import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    surname: string;
    id: string;
  }
  interface Session {
    user: User & {
      surname: string;
      id: string;
    };
    token: {
      surname: string;
      id: string;
    };
  }
}
