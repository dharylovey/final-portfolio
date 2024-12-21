import React from 'react';

export default function Headings({ children }: { children: React.ReactNode }) {
  return <h1 className="text-2xl text-foreground md:text-3xl">{children}</h1>;
}
