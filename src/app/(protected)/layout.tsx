import { AppSidebar } from '@/components/app-sidebar';
import { ModeToggle } from '@/components/theme/mode-toggle';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="min-h-screen w-full pt-6">
        <div className="flex justify-between">
          <SidebarTrigger />
          <ModeToggle />
        </div>
        <div className="pt-4">{children}</div>
      </main>
    </SidebarProvider>
  );
}
