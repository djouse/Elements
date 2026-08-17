import { useState } from 'react';
import type { Story, Meta } from '@ladle/react';
import { Navbar, NavbarInner, NavbarBrand, NavbarLinks, NavbarLink, NavbarActions } from '.';
import { Button } from '@/ui/atoms/buttons/Button';
import { Switch } from '@/ui/atoms/Switch';
import { Separator } from '@/ui/atoms/Separator';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from '@/ui/molecules/Sheets';
import { MenuIcon, ZapIcon, XIcon } from 'lucide-react';

const meta: Meta = {
  title: 'F Organisms/C Navbar',
  parameters: {
    docs: {
      description: {
        component:
          'A sticky top navigation bar composed from atoms and the Sheet molecule. Collapses to a mobile drawer on small screens.',
      },
    },
  },
};

export default meta;

const links = ['Dashboard', 'Projects', 'Analytics', 'Settings'];

export const Default: Story = () => {
  const [active, setActive] = useState('Dashboard');

  return (
    <div className="w-full rounded-xl border border-border overflow-hidden">
      <Navbar className="sticky-0 relative">
        <NavbarInner>
          <NavbarBrand>
            <ZapIcon className="size-5 text-primary" />
            <span className="text-sm font-semibold text-foreground">elements</span>
          </NavbarBrand>
          <Separator orientation="vertical" className="h-5" />
          <NavbarLinks>
            {links.map((link) => (
              <NavbarLink
                key={link}
                href="#"
                active={active === link}
                onClick={(e) => { e.preventDefault(); setActive(link); }}
              >
                {link}
              </NavbarLink>
            ))}
          </NavbarLinks>
          <NavbarActions>
            <Button variant="outline" size="sm">Sign in</Button>
            <Button variant="default" size="sm">Get started</Button>
          </NavbarActions>
        </NavbarInner>
      </Navbar>
      <div className="flex h-40 items-center justify-center text-sm text-muted-foreground">
        Page content
      </div>
    </div>
  );
};

export const WithMobileMenu: Story = () => {
  const [active, setActive] = useState('Projects');

  return (
    <div className="w-full rounded-xl border border-border overflow-hidden">
      <Navbar className="relative">
        <NavbarInner>
          <NavbarBrand>
            <ZapIcon className="size-5 text-primary" />
            <span className="text-sm font-semibold text-foreground">elements</span>
          </NavbarBrand>
          <NavbarLinks>
            {links.map((link) => (
              <NavbarLink
                key={link}
                href="#"
                active={active === link}
                onClick={(e) => { e.preventDefault(); setActive(link); }}
              >
                {link}
              </NavbarLink>
            ))}
          </NavbarLinks>
          <NavbarActions>
            <Button variant="default" size="sm" className="hidden md:inline-flex">
              Get started
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon-sm" className="md:hidden">
                  <MenuIcon className="size-4" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" showCloseButton={false}>
                <SheetHeader className="flex-row items-center justify-between">
                  <SheetTitle className="flex items-center gap-2">
                    <ZapIcon className="size-4 text-primary" />
                    elements
                  </SheetTitle>
                  <SheetClose asChild>
                    <Button variant="outline" size="icon-sm">
                      <XIcon className="size-4" />
                    </Button>
                  </SheetClose>
                </SheetHeader>
                <nav className="flex flex-col gap-1 px-4">
                  {links.map((link) => (
                    <button
                      key={link}
                      onClick={() => setActive(link)}
                      className={`rounded-md px-3 py-2.5 text-left text-sm transition-colors ${
                        active === link
                          ? 'bg-muted font-medium text-foreground'
                          : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                      }`}
                    >
                      {link}
                    </button>
                  ))}
                </nav>
                <div className="px-4 pt-2">
                  <Button variant="default" className="w-full">Get started</Button>
                </div>
              </SheetContent>
            </Sheet>
          </NavbarActions>
        </NavbarInner>
      </Navbar>
      <div className="flex h-40 items-center justify-center text-sm text-muted-foreground">
        Resize to mobile width to see the hamburger menu
      </div>
    </div>
  );
};

export const WithThemeToggle: Story = () => {
  const [active, setActive] = useState('Dashboard');
  const [dark, setDark] = useState(false);

  return (
    <div className="w-full rounded-xl border border-border overflow-hidden">
      <Navbar className="relative">
        <NavbarInner>
          <NavbarBrand>
            <ZapIcon className="size-5 text-primary" />
            <span className="text-sm font-semibold text-foreground">elements</span>
          </NavbarBrand>
          <NavbarLinks>
            {links.slice(0, 3).map((link) => (
              <NavbarLink
                key={link}
                href="#"
                active={active === link}
                onClick={(e) => { e.preventDefault(); setActive(link); }}
              >
                {link}
              </NavbarLink>
            ))}
          </NavbarLinks>
          <NavbarActions>
            <Switch
              size="sm"
              checked={dark}
              onCheckedChange={setDark}
              aria-label="Toggle dark mode"
            />
            <Separator orientation="vertical" className="h-5" />
            <Button variant="default" size="sm">Upgrade</Button>
          </NavbarActions>
        </NavbarInner>
      </Navbar>
      <div className="flex h-40 items-center justify-center text-sm text-muted-foreground">
        Page content
      </div>
    </div>
  );
};
