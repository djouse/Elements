import type { Story, Meta } from '@ladle/react';

const meta: Meta = {
  title: 'C Typography',
};

export default meta;

const sizes = [
  { label: 'text-xs', cls: 'text-xs', rem: '0.75rem' },
  { label: 'text-sm', cls: 'text-sm', rem: '0.875rem' },
  { label: 'text-base', cls: 'text-base', rem: '1rem' },
  { label: 'text-lg', cls: 'text-lg', rem: '1.125rem' },
  { label: 'text-xl', cls: 'text-xl', rem: '1.25rem' },
  { label: 'text-2xl', cls: 'text-2xl', rem: '1.5rem' },
  { label: 'text-3xl', cls: 'text-3xl', rem: '1.875rem' },
  { label: 'text-4xl', cls: 'text-4xl', rem: '2.25rem' },
  { label: 'text-5xl', cls: 'text-5xl', rem: '3rem' },
] as const;

const weights = [
  { label: 'Light', cls: 'font-light', value: '300' },
  { label: 'Normal', cls: 'font-normal', value: '400' },
  { label: 'Medium', cls: 'font-medium', value: '500' },
  { label: 'Semibold', cls: 'font-semibold', value: '600' },
  { label: 'Bold', cls: 'font-bold', value: '700' },
  { label: 'Extrabold', cls: 'font-extrabold', value: '800' },
] as const;

const Row = ({ label, meta: metaText, children }: { label: string; meta: string; children: React.ReactNode }) => (
  <div className="flex items-baseline gap-6 border-b border-border py-4 last:border-0">
    <div className="w-28 shrink-0">
      <span className="text-xs font-mono text-muted-foreground">{label}</span>
      <span className="block text-xs text-muted-foreground/60">{metaText}</span>
    </div>
    {children}
  </div>
);

export const Scale: Story = () => (
  <div className="max-w-2xl px-6 py-8">
    <h2 className="mb-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Type Scale</h2>
    <p className="mb-8 text-sm text-muted-foreground">Host Grotesk — variable font 300–800</p>
    <div>
      {sizes.map(({ label, cls, rem }) => (
        <Row key={label} label={label} meta={rem}>
          <span className={`${cls} text-foreground`}>The quick brown fox</span>
        </Row>
      ))}
    </div>
  </div>
);

export const Weights: Story = () => (
  <div className="max-w-2xl px-6 py-8">
    <h2 className="mb-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Font Weights</h2>
    <p className="mb-8 text-sm text-muted-foreground">Host Grotesk supports 300–800</p>
    <div>
      {weights.map(({ label, cls, value }) => (
        <Row key={label} label={cls} meta={value}>
          <span className={`text-2xl ${cls} text-foreground`}>{label}</span>
        </Row>
      ))}
    </div>
  </div>
);

export const Hero: Story = () => (
  <div className="px-8 py-16 flex flex-col gap-16">
    <div className="flex flex-col gap-6">
      <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Display / Bold</p>
      <p className="text-[clamp(4rem,12vw,10rem)] font-extrabold leading-none tracking-tight text-foreground">
        Elements
      </p>
      <p className="text-[clamp(3rem,8vw,7rem)] font-bold leading-none tracking-tight text-foreground">
        Design System
      </p>
      <p className="text-[clamp(2rem,5vw,5rem)] font-semibold leading-none tracking-tight text-foreground">
        Built with React
      </p>
    </div>

    <div className="flex flex-col gap-6">
      <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Display / Light</p>
      <p className="text-[clamp(4rem,12vw,10rem)] font-light leading-none tracking-tight text-foreground">
        Elements
      </p>
      <p className="text-[clamp(3rem,8vw,7rem)] font-extralight leading-none tracking-tight text-muted-foreground">
        Design System
      </p>
    </div>

    <div className="flex flex-col gap-4">
      <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Display / Mixed weight</p>
      <p className="text-[clamp(3rem,8vw,7rem)] leading-none tracking-tight text-foreground">
        <span className="font-light">The </span>
        <span className="font-extrabold">quick </span>
        <span className="font-light">brown </span>
        <span className="font-extrabold">fox</span>
      </p>
    </div>
  </div>
);

export const Specimens: Story = () => (
  <div className="max-w-2xl px-6 py-8 flex flex-col gap-10">
    <div>
      <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Heading</p>
      <h1 className="text-4xl font-bold text-foreground">Elements UI</h1>
      <h2 className="text-2xl font-semibold text-foreground mt-2">A personal component sandbox</h2>
      <h3 className="text-xl font-medium text-foreground mt-2">Built with React, Tailwind &amp; Radix</h3>
    </div>
    <div>
      <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Body</p>
      <p className="text-base text-foreground leading-relaxed">
        This is body text at the base size. It should be comfortable to read at length. The quick brown fox jumps over the lazy dog.
      </p>
      <p className="text-sm text-muted-foreground leading-relaxed mt-3">
        This is secondary body text at text-sm, using muted-foreground for reduced emphasis. Good for descriptions and supporting copy.
      </p>
    </div>
    <div>
      <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Utility</p>
      <div className="flex flex-col gap-2">
        <span className="text-xs text-muted-foreground">Caption — text-xs / muted-foreground</span>
        <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Label — text-xs / uppercase / tracking-wider</span>
        <span className="text-sm font-mono text-foreground">Mono — font-mono for code snippets</span>
      </div>
    </div>
  </div>
);
