'use client';

import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { contactFormSchema } from '@/zodSchema/contactFormSchema';
import ContactSubmitBtn from './ContactSubmitBtn';
import { Card, CardContent, CardHeader, CardDescription, CardTitle } from './ui/card';
import Cliploader from 'react-spinners/ClipLoader';
import ReCAPTCHA from 'react-google-recaptcha';
import React, { useRef, useState } from 'react';
import { handleCaptchaSubmission } from '@/hooks/useCaptcha';
import { sendMail } from '@/action/contactMe';
import { CardFooter } from './card';
import Link from 'next/link';
import { PiMessengerLogo } from 'react-icons/pi';
import { LuGithub } from 'react-icons/lu';
import { CgMail } from 'react-icons/cg';

export default function ContactForm() {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const {
    formState: { isSubmitting, isDirty },
  } = form;

  const handleChange = async (token: string | null) => {
    const isVerified = await handleCaptchaSubmission(token);
    if (isVerified) {
      setIsCaptchaVerified(true);
    }
  };

  function handleExpired() {
    setIsCaptchaVerified(false);
  }

  async function onSubmit(values: z.infer<typeof contactFormSchema>) {
    const response = contactFormSchema.safeParse(values);

    if (!response.success) return toast.error('Failed to submit the message. Please try again.');
    const data = await sendMail(response.data);
    try {
      toast.success(data.message);
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error(data.error);
    } finally {
      form.reset();
      recaptchaRef.current?.reset();
      setIsCaptchaVerified(false);
    }
  }

  return (
    <Card className="mx-auto w-full md:w-[600px]">
      <CardHeader className="space-y-3 text-center">
        <CardTitle>Get in touch</CardTitle>
        <CardDescription className="text-pretty font-sans text-sm text-muted-foreground md:text-lg">
          I&apos;m always open to new opportunities and interesting projects. Feel free to reach
          out!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 py-10">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-6">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Juan" type="text" {...field} disabled={isSubmitting} />
                      </FormControl>
                      <FormDescription>Provide your first name.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="col-span-6">
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Dela Cruz"
                          type="text"
                          {...field}
                          disabled={isSubmitting}
                        />
                      </FormControl>
                      <FormDescription>Enter your family or surname.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="you@example.com"
                      type="email"
                      {...field}
                      disabled={isSubmitting}
                    />
                  </FormControl>
                  <FormDescription>Enter a valid email address.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subject</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Subject of your message"
                      type="text"
                      {...field}
                      disabled={isSubmitting}
                    />
                  </FormControl>
                  <FormDescription>
                    Summarize your inquiry in a few words for quicker reference.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Type your message..."
                      className="resize-none"
                      {...field}
                      disabled={isSubmitting}
                    />
                  </FormControl>
                  <FormDescription>
                    Write your message here, including any specific details or questions you have.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="w-full">
              <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                ref={recaptchaRef}
                onChange={handleChange}
                onExpired={handleExpired}
                style={{ display: 'flex', width: '100%' }}
              />
            </div>

            {/* todo button */}
            <ContactSubmitBtn
              isSubmitting={isSubmitting}
              isCaptchaVerified={isCaptchaVerified}
              isDirty={isDirty}
            >
              {isSubmitting ? (
                <div className="flex items-center gap-3">
                  <Cliploader size={20} color="text-primary" />
                  <span>Submitting...</span>
                </div>
              ) : (
                'Submit'
              )}
            </ContactSubmitBtn>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex flex-col items-center justify-center space-y-4">
        <p className="md:text-md text-pretty text-center font-sans text-sm text-muted-foreground">
          Or connect with me on social media
        </p>
        <div className="flex items-center justify-center space-x-4">
          <Link href={'https://m.me/dharyl2'} target="_blank">
            <PiMessengerLogo size={30} />
          </Link>
          <Link href={'https://github.com/dharylovey'} target="_blank">
            <LuGithub size={30} />
          </Link>
          <Link href={'mailto:mdhar1487@gmail.com'}>
            <CgMail size={30} />
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
