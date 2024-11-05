import React from 'react';
import { Button } from '@/components/ui/button';

interface ButtonProps {
  children: React.ReactNode;
  isSubmitting?: boolean;
}

export default function ContactSubmitBtn({ children, isSubmitting }: ButtonProps) {
  return (
    <Button type="submit" disabled={isSubmitting} className="w-full">
      {children}
    </Button>
  );
}
