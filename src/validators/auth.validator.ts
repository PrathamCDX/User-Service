import { z } from 'zod';

export const registerSchema = z.object({
    fullName: z
        .string({ required_error: 'Full name is required'})
        .min(4, { message: 'Full name must be at least 4 characters' })
        .max(50, { message: 'Full name must be less than 50 characters' }),
    email: z
        .string({ required_error: 'Email is required' })
        .email({ message: 'Invalid email address' }),
    password: z
        .string({ required_error: 'Password is required' })
        .min(8, { message: 'Password must be at least 8 characters' })
        .max(32, { message: 'Password must be less than 32 characters' })
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&^_-])[A-Za-z\d@$!%*#?&^_-]{8,}$/, {
            message: 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
        }),
    phoneNo: z
        .string({ required_error: 'Phone number is required' })
        .regex(/^[6-9]\d{9}$/, { message: 'Phone number must be a valid 10-digit Indian mobile number' })
});

export const loginSchema = z.object({
    email: z
        .string({ required_error: 'Email is required' })
        .email({ message: 'Invalid email address' }),
    password: z.string({ required_error: 'Password is required' })
});