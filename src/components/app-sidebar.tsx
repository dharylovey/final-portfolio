import { CalendarIcon, HomeIcon, EnvelopeOpenIcon, GearIcon } from '@radix-ui/react-icons';
import { FaRegUser } from 'react-icons/fa';
import { GrBlog } from 'react-icons/gr';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import Link from 'next/link';
import { LogoutButton } from '@/app/(protected)/dashboard/_component/logout';
import { AvatarUser } from '@/app/(protected)/dashboard/_component/avatar';

const items = [
  {
    title: 'Dashboard',
    url: '/dashboard',
    icon: HomeIcon,
  },
  {
    title: 'Profile',
    url: '/dashboard/profile',
    icon: FaRegUser,
  },
  {
    title: 'Blog',
    url: '/dashboard/blog',
    icon: GrBlog,
  },

  {
    title: 'Inbox',
    url: '/dashboard/inbox',
    icon: EnvelopeOpenIcon,
  },
  {
    title: 'Calendar',
    url: '/dashboard/calendar',
    icon: CalendarIcon,
  },
  {
    title: 'Settings',
    url: '/dashboard/settings',
    icon: GearIcon,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Admin Dashboard</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="h-fit">
              <div className="flex items-center gap-6">
                <Link href="#">
                  <AvatarUser />
                </Link>
                <p>Admin</p>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
