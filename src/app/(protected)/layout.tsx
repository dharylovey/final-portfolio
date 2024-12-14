import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto flex h-[90vh] max-w-screen-lg items-center justify-center">
      {children}
    </div>
  );
}
