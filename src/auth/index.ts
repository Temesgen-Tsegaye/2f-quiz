import NextAuth, { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { prisma } from "@/config/prisma-client";
export const BASE_PATH = "/api/auth";

const authOptions: NextAuthConfig = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        phoneNumber: { label: "phoneNumber", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials): Promise<any> {
        const user = await prisma.user.findUnique({
          where: {
            phonenumber: credentials.phoneNumber as string
          }
        });

        return user
          ? { id: user.id, name: user.name, email: user.email, role: user.type }
          : null;
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      if (token.id) {
        session.user.id = token.id as string; 
      }
      if (token.role) {
        session.user.role  = token.role  ; 
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id; 
        token.role = user.role; 
      }
      return token;
    },
  },
  basePath: BASE_PATH,
  secret: process.env.NEXTAUTH_SECRET,
};

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions);



// import NextAuth, { User, NextAuthConfig } from "next-auth";
// import Credentials from "next-auth/providers/credentials";
// import { prisma } from "@/config/prisma-client";
// export const BASE_PATH = "/api/auth";

// const authOptions: NextAuthConfig = {
//   providers: [
//     Credentials({
//       name: "Credentials",
//       credentials: {
//         phoneNumber: { label: "phoneNumber", type: "text", placeholder: "jsmith" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials): Promise<any> {
        

//         const user=await prisma.user.findUnique({
//           where:{
//             phonenumber:credentials.phoneNumber as string
//           }
//         })
       
//         console.log(user,'uss')
//         return user
//           ? { id: user.id, name: user.name, email:user.email,role:user.type  }
//           : null;
//       },
//     }),
//   ],
//   basePath: BASE_PATH,
//   secret: process.env.NEXTAUTH_SECRET,
 
// };

// export const { handlers, auth, signIn, signOut } = NextAuth(authOptions);