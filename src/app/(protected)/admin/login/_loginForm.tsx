'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '@/zodSchema/loginSchema';
import { useForm } from 'react-hook-form';

export default function LoginForm() {
  const form = useForm({
    resolver: zodResolver(loginSchema),
  });
  return (
    <Card className="mx-auto w-full space-y-3 md:w-[500px]">
      <CardHeader className="space-y-3 text-center">
        <CardTitle>Welcom Back 👋</CardTitle>
        <CardDescription className="text-pretty font-sans text-sm text-muted-foreground md:text-lg">
          Please enter your login credentials to access your account.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="dev@mail.com" type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="*******" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
