import * as z from 'zod';

export const contactFormSchema = z.object({
  firstName: z.string().min(1, { message: 'First Name is required' }),
  lastName: z.string().min(1, { message: 'Last Name is required' }),
  email: z
    .string()
    .email({ message: 'Please enter a valid email' })
    .max(100, { message: 'Email is too long' }),
  subject: z
    .string()
    .min(1, { message: 'Subject is required' })
    .max(100, { message: 'Subject is too long' }),
  message: z.string().min(1, { message: 'Message is required' }),
});
