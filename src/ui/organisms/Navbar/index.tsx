import * as React from 'react'
import { cn } from '@/lib/utils'

function Navbar({ className, ...props }: React.ComponentProps<'header'>) {
  return (
    <header
      data-slot="navbar"
      className={cn(
        'sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/80',
        className
      )}
      {...props}
    />
  )
}

function NavbarInner({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="navbar-inner"
      className={cn('mx-auto flex h-14 max-w-screen-xl items-center gap-4 px-6', className)}
      {...props}
    />
  )
}

function NavbarBrand({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="navbar-brand"
      className={cn('flex shrink-0 items-center gap-2', className)}
      {...props}
    />
  )
}

function NavbarLinks({ className, ...props }: React.ComponentProps<'nav'>) {
  return (
    <nav
      data-slot="navbar-links"
      className={cn('hidden flex-1 items-center gap-1 md:flex', className)}
      {...props}
    />
  )
}

function NavbarLink({
  active,
  className,
  ...props
}: React.ComponentProps<'a'> & { active?: boolean }) {
  return (
    <a
      data-slot="navbar-link"
      data-active={active}
      className={cn(
        'rounded-md px-3 py-1.5 text-sm transition-colors',
        active
          ? 'bg-muted font-medium text-foreground'
          : 'text-muted-foreground hover:bg-muted hover:text-foreground',
        className
      )}
      {...props}
    />
  )
}

function NavbarActions({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="navbar-actions"
      className={cn('ml-auto flex items-center gap-2', className)}
      {...props}
    />
  )
}

export { Navbar, NavbarInner, NavbarBrand, NavbarLinks, NavbarLink, NavbarActions }
