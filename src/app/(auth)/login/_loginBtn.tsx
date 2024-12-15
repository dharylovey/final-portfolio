import { Button } from '@/components/ui/button';
import React from 'react';

export default function LoginBtn({ isSubmitting }: { isSubmitting: boolean }) {
  return (
    <Button className="w-full" disabled={isSubmitting}>
      <span>{isSubmitting ? 'Logging In...' : 'Admin Login'}</span>
    </Button>
  );
}
