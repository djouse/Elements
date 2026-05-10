import type { Story, Meta } from '@ladle/react';

const meta: Meta = {
  title: 'E Molecules/A Overview',
};

export default meta;

const ComponentCard = ({
  href,
  label,
  description,
  slots,
}: {
  href: string;
  label: string;
  description: string;
  slots?: string[];
}) => (
  <a
    href={href}
    className="group flex flex-col gap-3 rounded-xl border border-border bg-card p-5 transition-colors hover:border-muted-neutral hover:bg-muted/40 no-underline"
  >
    <div>
      <span className="text-sm font-medium text-foreground">{label}</span>
      <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
    {slots && slots.length > 0 && (
      <div className="flex flex-wrap gap-1.5">
        {slots.map((s) => (
          <span key={s} className="rounded-md bg-muted px-2 py-0.5 text-xs font-mono text-muted-foreground">
            {s}
          </span>
        ))}
      </div>
    )}
    <span className="text-xs font-medium text-primary group-hover:underline">View stories →</span>
  </a>
);

export const Overview: Story = () => (
  <div className="min-h-screen bg-background px-8 py-12">
    <div className="max-w-2xl">

      <div className="mb-10">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          elements / molecules
        </p>
        <h1 className="text-3xl font-bold text-foreground">Molecules</h1>
        <p className="mt-3 text-base text-muted-foreground leading-relaxed">
          Composed components built from atomic primitives. Each molecule combines multiple atoms
          into a purposeful, self-contained UI pattern with its own interaction model.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Components</h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <ComponentCard
            href="?story=e-molecules--a-sheet--sides"
            label="Sheet"
            description="A slide-in overlay panel built on Radix Dialog, supporting all four sides with header, footer, and close button slots."
            slots={['SheetTrigger', 'SheetContent', 'SheetHeader', 'SheetFooter', 'SheetTitle', 'SheetDescription', 'SheetClose']}
          />
        </div>
      </div>

      <div className="rounded-xl border border-border bg-card p-5">
        <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Conventions</h2>
        <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
          <li>Components live under <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">src/ui/molecules/&lt;Name&gt;/index.tsx</code></li>
          <li>Stories sit alongside as <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">&lt;Name&gt;.stories.tsx</code></li>
          <li>Molecules compose atoms — they never contain other molecules</li>
          <li>Radix UI primitives are imported from the unified <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">radix-ui</code> package</li>
        </ul>
      </div>

    </div>
  </div>
);
