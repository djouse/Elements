import { useState } from 'react';
import type { Story, Meta } from '@ladle/react';
import {
  AppSidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarItem,
  SidebarFooter,
} from '.';
import { ScrollArea } from '@/ui/atoms/Scroll';
import { Separator } from '@/ui/atoms/Separator';
import { Switch } from '@/ui/atoms/Switch';
import { Progress } from '@/ui/atoms/Progress';
import { Skeleton } from '@/ui/atoms/Skeleton';
import {
  LayoutDashboardIcon,
  FolderIcon,
  BarChart2Icon,
  UsersIcon,
  InboxIcon,
  SettingsIcon,
  ZapIcon,
  BellIcon,
  CreditCardIcon,
} from 'lucide-react';

const meta: Meta = {
  title: 'F Organisms/D Sidebar',
  parameters: {
    docs: {
      description: {
        component:
          'An app navigation sidebar composed from atoms. Uses ScrollArea for overflow, Separator between groups, Switch for settings, and Progress for storage.',
      },
    },
  },
};

export default meta;

const mainNav = [
  { label: 'Dashboard',  icon: <LayoutDashboardIcon /> },
  { label: 'Projects',   icon: <FolderIcon />,          badge: 3 },
  { label: 'Analytics',  icon: <BarChart2Icon /> },
  { label: 'Inbox',      icon: <InboxIcon />,            badge: 12 },
  { label: 'Team',       icon: <UsersIcon /> },
];

const secondaryNav = [
  { label: 'Billing',   icon: <CreditCardIcon /> },
  { label: 'Notifications', icon: <BellIcon /> },
  { label: 'Settings',  icon: <SettingsIcon /> },
];

export const Default: Story = () => {
  const [active, setActive] = useState('Dashboard');
  const [dark, setDark] = useState(false);

  return (
    <div className="flex h-[600px] rounded-xl border border-border overflow-hidden">
      <AppSidebar>
        <SidebarHeader>
          <ZapIcon className="size-5 text-primary" />
          <span className="text-sm font-semibold text-foreground">elements</span>
        </SidebarHeader>

        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Main</SidebarGroupLabel>
            {mainNav.map(({ label, icon, badge }) => (
              <SidebarItem
                key={label}
                label={label}
                icon={icon}
                badge={badge}
                active={active === label}
                onClick={() => setActive(label)}
              />
            ))}
          </SidebarGroup>

          <Separator className="my-2" />

          <SidebarGroup>
            <SidebarGroupLabel>Account</SidebarGroupLabel>
            {secondaryNav.map(({ label, icon }) => (
              <SidebarItem
                key={label}
                label={label}
                icon={icon}
                active={active === label}
                onClick={() => setActive(label)}
              />
            ))}
          </SidebarGroup>

          <div className="mt-auto pt-4">
            <div className="rounded-md bg-muted px-3 py-3">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-xs font-medium text-foreground">Storage</span>
                <span className="text-xs text-muted-foreground">4.2 / 10 GB</span>
              </div>
              <Progress value={42} />
            </div>
          </div>
        </SidebarContent>

        <Separator />

        <SidebarFooter>
          <div className="flex size-8 items-center justify-center rounded-full bg-muted text-xs font-semibold text-foreground shrink-0">
            JD
          </div>
          <div className="flex flex-1 flex-col gap-0.5 min-w-0">
            <span className="truncate text-xs font-medium text-foreground">José Dias</span>
            <span className="truncate text-[10px] text-muted-foreground">Free plan</span>
          </div>
          <Switch
            size="sm"
            checked={dark}
            onCheckedChange={setDark}
            aria-label="Dark mode"
          />
        </SidebarFooter>
      </AppSidebar>

      <div className="flex flex-1 items-center justify-center text-sm text-muted-foreground bg-muted/20">
        Main content area
      </div>
    </div>
  );
};

export const Loading: Story = () => (
  <div className="flex h-[600px] rounded-xl border border-border overflow-hidden">
    <AppSidebar>
      <SidebarHeader>
        <Skeleton className="size-5 rounded-md" />
        <Skeleton className="h-4 w-20" />
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <Skeleton className="mb-2 h-3 w-12" />
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="flex items-center gap-3 rounded-md px-3 py-2">
              <Skeleton className="size-4 rounded-sm" />
              <Skeleton className="h-3.5 flex-1" />
            </div>
          ))}
        </SidebarGroup>
      </SidebarContent>

      <Separator />

      <SidebarFooter>
        <Skeleton className="size-8 rounded-full shrink-0" />
        <div className="flex flex-1 flex-col gap-1.5">
          <Skeleton className="h-3 w-24" />
          <Skeleton className="h-2.5 w-16" />
        </div>
      </SidebarFooter>
    </AppSidebar>

    <div className="flex flex-1 items-center justify-center text-sm text-muted-foreground bg-muted/20">
      Loading…
    </div>
  </div>
);

export const WithScroll: Story = () => {
  const [active, setActive] = useState('Dashboard');
  const manyItems = Array.from({ length: 20 }, (_, i) => ({
    label: `Project ${i + 1}`,
    icon: <FolderIcon />,
  }));

  return (
    <div className="flex h-[500px] rounded-xl border border-border overflow-hidden">
      <AppSidebar>
        <SidebarHeader>
          <ZapIcon className="size-5 text-primary" />
          <span className="text-sm font-semibold text-foreground">elements</span>
        </SidebarHeader>

        <ScrollArea className="flex-1">
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Projects</SidebarGroupLabel>
              {manyItems.map(({ label, icon }) => (
                <SidebarItem
                  key={label}
                  label={label}
                  icon={icon}
                  active={active === label}
                  onClick={() => setActive(label)}
                />
              ))}
            </SidebarGroup>
          </SidebarContent>
        </ScrollArea>

        <Separator />

        <SidebarFooter>
          <div className="flex size-8 items-center justify-center rounded-full bg-muted text-xs font-semibold text-foreground shrink-0">
            JD
          </div>
          <span className="flex-1 truncate text-xs font-medium text-foreground">José Dias</span>
        </SidebarFooter>
      </AppSidebar>

      <div className="flex flex-1 items-center justify-center text-sm text-muted-foreground bg-muted/20">
        {active}
      </div>
    </div>
  );
};
