import '../globals.css';
import Navbar from '@/components/Navbar';
import { TooltipProvider } from '@/components/ui/tooltip';
import { ThemeProvider } from '@/components/theme-provider';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/sonner';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="dark">
        <TooltipProvider delayDuration={0}>
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
          <Footer />
        </TooltipProvider>
      </ThemeProvider>
    </>
  );
}
