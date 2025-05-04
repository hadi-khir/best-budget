import NextAuth from "next-auth";
import { authConfig } from "@/lib/auth.config";
import { PrismaAdapter } from "@auth/prisma-adapter";
import db from "@/lib/db";

export const { handlers, signIn, signOut, auth } = NextAuth({
 ...authConfig,
 adapter: PrismaAdapter(db),
 session: {
  strategy: "jwt",
 },
 pages: {
  signIn: "/login",
 },
 callbacks: {
  async jwt({ token, user }) {
   if (user) {
    const existingUser = await db.user.findUnique({
        where: {
            email: user.email || undefined,
        },
    });

    if (!existingUser) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.image = user.image;
    }
   }

   return token;
  },

  async session({ session, token }) {
   if (token) {
    // set the token data to session
    session.user.name = token.name as string;
    session.user.email = token.email as string;
    session.user.image = token.picture as string | null;
   }
   return session;
  },

  redirect() {
   return "/login";
  },
 },
});