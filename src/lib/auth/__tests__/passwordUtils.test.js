// src/lib/auth/__tests__/passwordUtils.test.ts
import { validatePassword } from '../passwordUtils';

const password = 'Test123!@#$xyz';
console.log('Testing password validation...');
console.log('Password:', password);
console.log('Validation result:', validatePassword(password));