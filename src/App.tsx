import { useState } from 'react';
import { Toaster } from './ui/atoms/Toaster';
import { Navbar, NavbarInner, NavbarBrand, NavbarLinks, NavbarLink, NavbarActions } from './ui/organisms/Navbar';
import { Hero, HeroBadge, HeroTitle, HeroDescription, HeroActions, HeroMetrics, HeroMetric } from './ui/organisms/Hero';
import { Card, CardHeader, CardTitle, CardDescription } from './ui/atoms/Card';
import { Button } from './ui/atoms/Buttons/Button';
import { AnimatedButton } from './ui/atoms/Buttons/AnimatedButtons';
import { Separator } from './ui/atoms/Separator';
import {
  ZapIcon,
  LayersIcon,
  MoonIcon,
  ShieldCheckIcon,
  ComponentIcon,
  PaletteIcon,
  ArrowRightIcon,
} from 'lucide-react';

const NAV_LINKS = ['Components', 'Organisms', 'Assets'] as const;

const FEATURES = [
  {
    icon: <LayersIcon className="size-5" />,
    title: 'Composable',
    description:
      'Every component exposes named slots and the asChild pattern. Compose complex UIs from small, single-purpose primitives without fighting the API.',
  },
  {
    icon: <PaletteIcon className="size-5" />,
    title: 'Token-driven',
    description:
      'Colors, radii, and typography are CSS custom properties defined in one place. Swap the entire theme by changing a handful of variables.',
  },
  {
    icon: <MoonIcon className="size-5" />,
    title: 'Dark mode',
    description:
      'Light and dark tokens are co-located in global.css. A single class toggle on the root element flips every color simultaneously.',
  },
  {
    icon: <ShieldCheckIcon className="size-5" />,
    title: 'Type-safe',
    description:
      'Variants and sizes are modelled with CVA and exported as TypeScript types. Invalid prop combinations are caught at build time.',
  },
  {
    icon: <ComponentIcon className="size-5" />,
    title: 'Radix primitives',
    description:
      'Accessibility is handled by headless Radix UI components. Focus management, keyboard navigation, and ARIA attributes come for free.',
  },
  {
    icon: <ZapIcon className="size-5" />,
    title: 'Instant iteration',
    description:
      'Ladle stories sit next to every component. Viewport presets, dark-mode toggle, and copy-to-clipboard make design review fast.',
  },
] as const;

export default function App() {
  const [active, setActive] = useState<string>('Components');

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Toaster />

      {/* ── Navbar ───────────────────────────────────────────────────────── */}
      <Navbar>
        <NavbarInner>
          <NavbarBrand>
            <ZapIcon className="size-5 text-primary" />
            <span className="text-sm font-semibold">elements</span>
          </NavbarBrand>

          <Separator orientation="vertical" className="h-5" />

          <NavbarLinks>
            {NAV_LINKS.map((link) => (
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
            <Button variant="outline" size="sm" asChild>
              <a href="https://github.com" target="_blank" rel="noreferrer">
                <svg width="14" height="14" aria-hidden>
                  <use href="/icons.svg#github-icon" />
                </svg>
                GitHub
              </a>
            </Button>
            <Button variant="default" size="sm">
              Open Ladle
            </Button>
          </NavbarActions>
        </NavbarInner>
      </Navbar>

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <Hero>
        <HeroBadge>
          <ZapIcon className="size-3" />
          React 19 · Tailwind v4 · Radix UI
        </HeroBadge>

        <HeroTitle>
          Build interfaces
          <br />
          <span className="text-muted-foreground">that feel right</span>
        </HeroTitle>

        <HeroDescription>
          A personal design system built with composable atoms, typed variant APIs,
          and full dark-mode support. Every component is documented, tested at multiple
          viewports, and ready to compose.
        </HeroDescription>

        <HeroActions>
          <AnimatedButton size="lg">Browse components</AnimatedButton>
          <Button variant="outline" size="lg">
            View source
            <ArrowRightIcon className="size-4" />
          </Button>
        </HeroActions>

        <HeroMetrics>
          <HeroMetric label="Atoms" value="16" />
          <Separator orientation="vertical" className="h-10" />
          <HeroMetric label="Organisms" value="3" />
          <Separator orientation="vertical" className="h-10" />
          <HeroMetric label="Stories" value="70+" />
        </HeroMetrics>
      </Hero>

      {/* ── Features ─────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-5xl px-6 pb-32">
        <div className="mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Why elements
          </p>
          <h2 className="mt-3 text-3xl font-bold text-foreground">
            Everything you need, nothing you don't
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground leading-relaxed">
            A tight stack of well-chosen tools, each doing exactly one job.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ icon, title, description }) => (
            <Card key={title} className="transition-colors hover:border-muted-neutral">
              <CardHeader>
                <div className="mb-3 flex size-10 items-center justify-center rounded-lg bg-muted text-foreground">
                  {icon}
                </div>
                <CardTitle className="text-base">{title}</CardTitle>
                <CardDescription className="leading-relaxed">{description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
