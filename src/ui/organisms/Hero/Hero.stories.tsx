import type { Story, Meta } from '@ladle/react';
import { Hero, HeroBadge, HeroTitle, HeroDescription, HeroActions, HeroMetrics, HeroMetric } from '.';
import { Button } from '@/ui/atoms/buttons/Button';
import { AnimatedButton } from '@/ui/atoms/buttons/AnimatedButtons';
import { Separator } from '@/ui/atoms/Separator';
import { ArrowRightIcon, SparklesIcon } from 'lucide-react';

const meta: Meta = {
  title: 'F Organisms/B Hero',
  parameters: {
    docs: {
      description: {
        component:
          'A full-width hero section composed from atomic primitives. Slots: HeroBadge, HeroTitle, HeroDescription, HeroActions, HeroMetrics.',
      },
    },
  },
};

export default meta;

export const Marketing: Story = () => (
  <Hero>
    <HeroBadge>
      <SparklesIcon className="size-3" />
      Now in beta — try it free
    </HeroBadge>
    <HeroTitle>
      Build interfaces
      <br />
      <span className="text-muted-foreground">that feel right</span>
    </HeroTitle>
    <HeroDescription>
      A personal design system built with React 19, Tailwind CSS v4, and Radix UI. Composable atoms,
      typed variant APIs, and dark-mode support out of the box.
    </HeroDescription>
    <HeroActions>
      <AnimatedButton size="lg">Get started</AnimatedButton>
      <Button variant="outline" size="lg">
        View on GitHub
      </Button>
    </HeroActions>
    <HeroMetrics>
      <HeroMetric label="Components" value="16+" />
      <Separator orientation="vertical" className="h-10" />
      <HeroMetric label="Stories" value="60+" />
      <Separator orientation="vertical" className="h-10" />
      <HeroMetric label="Zero deps" value="100%" />
    </HeroMetrics>
  </Hero>
);

export const Simple: Story = () => (
  <Hero className="min-h-0 py-32">
    <HeroTitle className="text-4xl sm:text-5xl">Ship faster with elements</HeroTitle>
    <HeroDescription>
      Stop rebuilding the same components. Start with a solid foundation.
    </HeroDescription>
    <HeroActions>
      <Button variant="default" size="lg">
        Browse components
        <ArrowRightIcon className="size-4" />
      </Button>
      <Button variant="outline" size="lg">Read the docs</Button>
    </HeroActions>
  </Hero>
);

export const WithBackground: Story = () => (
  <div className="relative overflow-hidden rounded-xl bg-muted">
    <div className="pointer-events-none absolute inset-0 bg-radial-[ellipse_at_top] from-primary/5 to-transparent" />
    <Hero className="relative min-h-0 py-28">
      <HeroBadge>Open source</HeroBadge>
      <HeroTitle className="text-4xl sm:text-5xl lg:text-6xl">
        Design system for
        <br />
        modern products
      </HeroTitle>
      <HeroDescription>
        Accessible, composable, and type-safe. Every component ships with CVA variants,
        Radix primitives, and full dark-mode support.
      </HeroDescription>
      <HeroActions>
        <AnimatedButton size="lg">Start building</AnimatedButton>
        <Button variant="outline" size="lg">See examples</Button>
      </HeroActions>
    </Hero>
  </div>
);
