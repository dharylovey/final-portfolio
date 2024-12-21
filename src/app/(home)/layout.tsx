import Navbar from '@/components/Navbar';
import { Toaster } from '@/components/ui/sonner';
import '../globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="mx-auto min-h-screen max-w-screen-lg bg-background px-4 font-sans antialiased">
        <Navbar />
        {children}
        <Toaster
          duration={5000}
          position="top-right"
          toastOptions={{
            classNames: {
              error: 'bg-red-400',
              success: 'text-green-400',
              warning: 'text-yellow-400',
              info: 'bg-blue-400',
            },
          }}
        />
      </div>
    </>
  );
}
