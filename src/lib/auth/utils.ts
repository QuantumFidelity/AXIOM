// src/lib/auth/utils.ts
import { hash, compare } from 'bcryptjs';
import { JWT } from 'next-auth/jwt';

interface BasicUser {
  id: string;
  email: string;
  name: string;
}

export async function hashPassword(password: string): Promise<string> {
  return hash(password, 12);
}

export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  return compare(password, hashedPassword);
}

export function generateToken(user: BasicUser): JWT {
  return {
    id: user.id,
    email: user.email,
    name: user.name
  };
}