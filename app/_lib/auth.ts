import NextAuth, { type NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";
import { type Session } from "next-auth";
import { createUser, getUser } from "./data-services";

const authConfig: NextAuthConfig = {
  debug: true,
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID as string,
      clientSecret: process.env.AUTH_GOOGLE_SECRET as string,
    }),
  ],
  callbacks: {
    authorized({ auth }: { auth: Session | null }): boolean {
      return !!auth?.user;
    },
    async signIn({ user }) {
      try {
        if (!user.email) return false;

        const existingUser = await getUser(user.email);

        if (!existingUser)
          await createUser({
            name: user.name ?? "Unknown",
            email: user.email,
            image: user.image ?? "/user.png",
          });
        return true;
      } catch {
        return false;
      }
    },

    async session({ session }) {
      const user = await getUser(session.user.email);
      session.user.id = user.id;
      return session;
    },
  },
  pages: {
    signIn: "signin",
  },
};

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(authConfig);
