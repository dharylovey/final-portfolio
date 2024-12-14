import React from 'react';
import { Button } from '@/components/ui/button';

interface ButtonProps {
  children: React.ReactNode;
  isSubmitting?: boolean;
  isCaptchaVerified?: boolean;
  isDirty?: boolean;
}

export default function ContactSubmitBtn({
  children,
  isSubmitting,
  isCaptchaVerified,
  isDirty,
}: ButtonProps) {
  return (
    <Button
      type="submit"
      disabled={!isDirty || isSubmitting || !isCaptchaVerified}
      className="w-full"
    >
      {children}
    </Button>
  );
}
