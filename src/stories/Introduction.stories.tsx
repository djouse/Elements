import type { Story, Meta } from '@ladle/react';

const meta: Meta = {
  title: 'A Introduction',
};

export default meta;

const NavCard = ({
  href,
  label,
  description,
  tag,
}: {
  href: string;
  label: string;
  description: string;
  tag: string;
}) => (
  <a
    href={href}
    className="group flex flex-col gap-2 rounded-xl border border-border bg-card p-5 transition-colors hover:border-muted-neutral hover:bg-muted/40 no-underline"
  >
    <div className="flex items-center justify-between">
      <span className="text-sm font-medium text-foreground">{label}</span>
      <span className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">{tag}</span>
    </div>
    <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    <span className="text-xs font-medium text-primary mt-1 group-hover:underline">Browse →</span>
  </a>
);

const Token = ({ name, value }: { name: string; value: string }) => (
  <div className="flex items-center gap-3">
    <span className="text-sm font-mono text-muted-foreground">{name}</span>
    <span className="text-xs text-muted-foreground/60">{value}</span>
  </div>
);

export const Welcome: Story = () => (
  <div className="min-h-screen bg-background px-8 py-12">
    <div className="max-w-2xl">

      <div className="mb-10">
        <span className="mb-3 inline-block rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
          elements
        </span>
        <h1 className="text-4xl font-bold text-foreground">Design System</h1>
        <p className="mt-3 text-base text-muted-foreground leading-relaxed">
          A personal UI component library built with React 19, TypeScript, Tailwind CSS v4, and shadcn/ui.
          Browse components, explore tokens, and reference typographic styles — all in one place.
        </p>
      </div>

      <div className="mb-10">
        <h2 className="mb-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Structure</h2>
        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <NavCard
            href="?story=c-typography--scale"
            label="Typography"
            description="Type scale, font weights, and text specimens using Host Grotesk."
            tag="3 stories"
          />
          <NavCard
            href="?story=b-colors--palette"
            label="Colors"
            description="All design tokens mapped from CSS custom properties to Tailwind utilities."
            tag="1 story"
          />
          <NavCard
            href="?story=d-atoms--a-overview--overview"
            label="Atoms"
            description="Primitive UI components — buttons, cards, items, separators, scroll areas, switches, tabs, dialogs, drawers, and more."
            tag="16 components"
          />
          <NavCard
            href="?story=e-molecules--a-overview--overview"
            label="Molecules"
            description="Composed patterns built from atoms — overlays, panels, and multi-part interactive components."
            tag="1 component"
          />
          <NavCard
            href="?story=f-organisms--a-overview--overview"
            label="Organisms"
            description="Full UI sections — hero, navbar, and sidebar — assembled from atoms and molecules."
            tag="3 components"
          />
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Tech Stack</h2>
        <div className="rounded-xl border border-border bg-card p-5 flex flex-col gap-2">
          <Token name="Framework" value="React 19 + TypeScript" />
          <Token name="Styling" value="Tailwind CSS v4 — CSS-first config via global.css" />
          <Token name="Primitives" value="Radix UI (unified radix-ui package)" />
          <Token name="Variants" value="class-variance-authority (CVA)" />
          <Token name="Dev server" value="Vite 8" />
          <Token name="Stories" value="Ladle" />
        </div>
      </div>

    </div>
  </div>
);
