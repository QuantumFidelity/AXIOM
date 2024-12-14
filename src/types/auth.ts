// src/types/auth.ts
export interface User {
    id: string;
    email: string;
    username: string;
    password: string;  // This will be hashed
    created_at: Date;
    updated_at: Date;
  }
  
  export interface LoginCredentials {
    email: string;
    password: string;
  }
  
  export interface RegisterData extends LoginCredentials {
    username: string;
    confirmPassword: string;
  }
  
  export interface AuthResponse {
    user: Omit<User, 'password'>;
    token: string;
    refreshToken: string;
  }
  
  export interface JWTPayload {
    userId: string;
    email: string;
    iat?: number;
    exp?: number;
  }