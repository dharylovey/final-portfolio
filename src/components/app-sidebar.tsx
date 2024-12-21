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
import { ModeToggle } from './mode-toggle';
import { ModeToggleDropdown } from './mode-toggle-dropdown';

const items = [
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
    title: 'Home',
    url: '/dashboard',
    icon: HomeIcon,
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
            <SidebarMenuButton asChild>
              <div className="flex items-center justify-between">
                <Link href="#">User</Link>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
