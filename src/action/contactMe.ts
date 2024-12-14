'use server';
import { sendEmailtoAdmin, sendEmailtoUser } from '@/lib/email';
import { contactFormSchema } from '@/zodSchema/contactFormSchema';
import { z } from 'zod';

export async function sendMail(data: z.infer<typeof contactFormSchema>) {
  const validatedFields = contactFormSchema.safeParse(data);

  if (!validatedFields.success) {
    return { success: false, message: 'Invalid fields' };
  }

  const { email, subject, message, firstName, lastName } = validatedFields.data;

  try {
    await sendEmailtoAdmin(email, subject, message, firstName, lastName);

    await sendEmailtoUser(email, firstName, lastName);

    return { success: true, message: 'Message sent successfully' };
  } catch (error) {
    return { success: false, error: 'Failed to submit the message. Please try again.' };
  }
}
