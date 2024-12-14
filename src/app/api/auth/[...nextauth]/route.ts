// src/app/api/auth/[...nextauth]/route.ts
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Check if we have credentials
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        // Check for our test user
        if (credentials.email === 'test@example.com' && credentials.password === 'password123') {
          return {
            id: "1",
            email: credentials.email,
            name: "Test User"
          };
        }

        // If we get here, we have invalid credentials
        return null;
      }
    })
  ],
  pages: {
    signIn: '/auth/signin'
  }
});

export { handler as GET, handler as POST };