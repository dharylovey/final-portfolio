import React from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import { Dock, DockIcon } from './magicui/dock';
import Link from 'next/link';
import { HomeIcon, LinkedInLogoIcon, GitHubLogoIcon } from '@radix-ui/react-icons';
import { FaFacebook } from 'react-icons/fa';
import { Separator } from './ui/separator';
import { ModeToggle } from './mode-toggle';
import { DATA } from '@/data/data';

export default function Navbar() {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-30 mx-auto mt-4 flex h-full max-h-14 origin-bottom">
      <div className="fixed inset-x-0 bottom-0 h-16 w-full bg-background to-transparent [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background"></div>
      <Dock
        direction="middle"
        className="pointer-events-auto relative z-50 mx-auto flex h-full min-h-full transform-gpu items-center bg-background px-1 [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
      >
        {DATA.navbar.map((item: any) => (
          <DockIcon key={item.href}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href={item.href} target={item.href === '/' ? '_self' : '_blank'}>
                  <item.icon className="size-4 h-6 w-6" color={item.color} />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}

        <Separator orientation="vertical" />
        <DockIcon>
          <Tooltip>
            <TooltipTrigger asChild>
              <ModeToggle />
            </TooltipTrigger>
            <TooltipContent>
              <p>Theme</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>
      </Dock>
    </header>
  );
}
