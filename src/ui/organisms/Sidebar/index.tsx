import * as React from 'react'
import { cn } from '@/lib/utils'

function AppSidebar({ className, ...props }: React.ComponentProps<'aside'>) {
  return (
    <aside
      data-slot="sidebar"
      className={cn(
        'flex h-full w-64 shrink-0 flex-col border-r border-border bg-background',
        className
      )}
      {...props}
    />
  )
}

function SidebarHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sidebar-header"
      className={cn('flex h-14 shrink-0 items-center gap-3 border-b border-border px-4', className)}
      {...props}
    />
  )
}

function SidebarContent({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sidebar-content"
      className={cn('flex flex-1 flex-col gap-1 overflow-y-auto px-3 py-3', className)}
      {...props}
    />
  )
}

function SidebarGroup({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div data-slot="sidebar-group" className={cn('flex flex-col gap-0.5', className)} {...props} />
  )
}

function SidebarGroupLabel({ className, ...props }: React.ComponentProps<'p'>) {
  return (
    <p
      data-slot="sidebar-group-label"
      className={cn(
        'mb-1 px-3 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground',
        className
      )}
      {...props}
    />
  )
}

function SidebarItem({
  icon,
  label,
  badge,
  active,
  className,
  ...props
}: React.ComponentProps<'button'> & {
  icon?: React.ReactNode
  label: string
  badge?: string | number
  active?: boolean
}) {
  return (
    <button
      data-slot="sidebar-item"
      data-active={active || undefined}
      className={cn(
        'flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors',
        active
          ? 'bg-muted font-medium text-foreground'
          : 'text-muted-foreground hover:bg-muted hover:text-foreground',
        className
      )}
      {...props}
    >
      {icon && (
        <span className="flex size-4 shrink-0 items-center justify-center [&_svg]:size-4">
          {icon}
        </span>
      )}
      <span className="flex-1 truncate text-left">{label}</span>
      {badge !== undefined && (
        <span className="rounded-full bg-muted-neutral px-1.5 py-0.5 text-[10px] font-medium text-foreground tabular-nums">
          {badge}
        </span>
      )}
    </button>
  )
}

function SidebarFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sidebar-footer"
      className={cn(
        'flex shrink-0 items-center gap-3 border-t border-border px-4 py-3',
        className
      )}
      {...props}
    />
  )
}

export {
  AppSidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarItem,
  SidebarFooter,
}
