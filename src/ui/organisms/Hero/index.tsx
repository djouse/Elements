import * as React from 'react'
import { cn } from '@/lib/utils'

function Hero({ className, ...props }: React.ComponentProps<'section'>) {
  return (
    <section
      data-slot="hero"
      className={cn(
        'relative flex min-h-[80vh] flex-col items-center justify-center px-6 py-24 text-center',
        className
      )}
      {...props}
    />
  )
}

function HeroBadge({ className, ...props }: React.ComponentProps<'span'>) {
  return (
    <span
      data-slot="hero-badge"
      className={cn(
        'mb-6 inline-flex items-center gap-1.5 rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground',
        className
      )}
      {...props}
    />
  )
}

function HeroTitle({ className, ...props }: React.ComponentProps<'h1'>) {
  return (
    <h1
      data-slot="hero-title"
      className={cn(
        'max-w-4xl text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl',
        className
      )}
      {...props}
    />
  )
}

function HeroDescription({ className, ...props }: React.ComponentProps<'p'>) {
  return (
    <p
      data-slot="hero-description"
      className={cn(
        'mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground',
        className
      )}
      {...props}
    />
  )
}

function HeroActions({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="hero-actions"
      className={cn('mt-10 flex flex-wrap items-center justify-center gap-3', className)}
      {...props}
    />
  )
}

function HeroMetrics({ className, ...props }: React.ComponentProps<'dl'>) {
  return (
    <dl
      data-slot="hero-metrics"
      className={cn('mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-6', className)}
      {...props}
    />
  )
}

function HeroMetric({
  label,
  value,
  className,
}: {
  label: string
  value: string
  className?: string
}) {
  return (
    <div className={cn('flex flex-col items-center gap-1', className)}>
      <dt className="text-xs font-medium uppercase tracking-widest text-muted-foreground">{label}</dt>
      <dd className="text-3xl font-bold text-foreground">{value}</dd>
    </div>
  )
}

export { Hero, HeroBadge, HeroTitle, HeroDescription, HeroActions, HeroMetrics, HeroMetric }
