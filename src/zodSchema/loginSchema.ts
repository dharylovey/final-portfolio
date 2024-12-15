import z from 'zod';

export const loginSchema = z.object({
  email: z
    .string()
    .email({ message: 'Please enter a valid email' })
    .min(1, { message: 'Email is required' })
    .max(50, { message: 'Email is too long' }),
  password: z
    .string()
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+[{\]};:'",<.>/?]).{8,}$/, {
      message: 'Password must be at least 8 char, number and special char',
    }),
});

export type LoginSchema = z.infer<typeof loginSchema>;
