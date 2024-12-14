// src/lib/auth/utils.ts
import { hash, compare } from 'bcryptjs';
import { sign, verify } from 'jsonwebtoken';
import { JWTPayload } from '@/types/auth';

const JWT_SECRET = process.env.JWT_SECRET || 'your-development-secret';
const REFRESH_SECRET = process.env.REFRESH_SECRET || 'your-refresh-secret';

export async function hashPassword(password: string): Promise<string> {
  return hash(password, 12);
}

export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  return compare(password, hashedPassword);
}

export function generateTokens(payload: JWTPayload) {
  const token = sign(payload, JWT_SECRET, { expiresIn: '15m' });
  const refreshToken = sign(payload, REFRESH_SECRET, { expiresIn: '7d' });
  
  return { token, refreshToken };
}

export function verifyToken(token: string): JWTPayload {
  try {
    return verify(token, JWT_SECRET) as JWTPayload;
  } catch (error) {
    throw new Error('Invalid token');
  }
}

export function verifyRefreshToken(token: string): JWTPayload {
  try {
    return verify(token, REFRESH_SECRET) as JWTPayload;
  } catch (error) {
    throw new Error('Invalid refresh token');
  }
}