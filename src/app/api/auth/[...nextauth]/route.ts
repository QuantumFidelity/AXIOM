// src/app/api/auth/[...nextauth]/route.ts
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import type { User } from 'next-auth';

// Define our test user validation without passwordUtils for now
const validateCredentials = (email: string, password: string) => {
  return email === 'test@example.com' && password === 'Test123!@#$xyz';
};

declare module 'next-auth' {
  interface Session {
    user: User & {
      id: string;
    };
  }
}

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials): Promise<User | null> {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        if (validateCredentials(credentials.email, credentials.password)) {
          return {
            id: "1",
            email: credentials.email,
            name: "Test User"
          };
        }

        return null;
      }
    })
  ],
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60, // 24 hours
  },
  pages: {
    signIn: '/auth/signin',
  },
  callbacks: {
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub ?? '';
      }
      return session;
    }
  }
});

export { handler as GET, handler as POST };
