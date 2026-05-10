import type { Story, Meta } from '@ladle/react';

const meta: Meta = {
  title: 'F Organisms/A Overview',
};

export default meta;

const ComponentCard = ({
  href,
  label,
  description,
  atoms,
}: {
  href: string;
  label: string;
  description: string;
  atoms?: string[];
}) => (
  <a
    href={href}
    className="group flex flex-col gap-3 rounded-xl border border-border bg-card p-5 transition-colors hover:border-muted-neutral hover:bg-muted/40 no-underline"
  >
    <div>
      <span className="text-sm font-medium text-foreground">{label}</span>
      <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
    {atoms && atoms.length > 0 && (
      <div className="flex flex-wrap gap-1.5">
        {atoms.map((a) => (
          <span key={a} className="rounded-md bg-muted px-2 py-0.5 text-xs font-mono text-muted-foreground">
            {a}
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
          elements / organisms
        </p>
        <h1 className="text-3xl font-bold text-foreground">Organisms</h1>
        <p className="mt-3 text-base text-muted-foreground leading-relaxed">
          Complex, self-contained UI sections composed from atoms and molecules.
          Each organism represents a distinct region of an interface — it owns its
          layout, interaction state, and data shape.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Components</h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <ComponentCard
            href="?story=f-organisms--b-hero--marketing"
            label="Hero"
            description="A full-width marketing section with badge, headline, description, CTA buttons, and optional metrics row."
            atoms={['HeroBadge', 'HeroTitle', 'HeroDescription', 'HeroActions', 'HeroMetrics', 'Button', 'AnimatedButton', 'Separator']}
          />
          <ComponentCard
            href="?story=f-organisms--c-navbar--default"
            label="Navbar"
            description="A sticky top bar with brand, navigation links, and actions. Collapses to a mobile drawer via the Sheet molecule."
            atoms={['NavbarBrand', 'NavbarLinks', 'NavbarLink', 'NavbarActions', 'Button', 'Switch', 'Sheet', 'Separator']}
          />
          <ComponentCard
            href="?story=f-organisms--d-sidebar--default"
            label="Sidebar"
            description="An app navigation panel with grouped nav items, badge counts, storage progress, and a user footer with theme toggle."
            atoms={['SidebarItem', 'SidebarGroup', 'ScrollArea', 'Separator', 'Switch', 'Progress', 'Skeleton']}
          />
        </div>
      </div>

      <div className="rounded-xl border border-border bg-card p-5">
        <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Conventions</h2>
        <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
          <li>Components live under <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">src/ui/organisms/&lt;Name&gt;/index.tsx</code></li>
          <li>Organisms compose atoms and molecules — they never import other organisms</li>
          <li>Layout and interaction state live inside the organism; data is passed via props</li>
          <li>Each organism ships a <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">data-slot</code> attribute on its root for CSS targeting</li>
        </ul>
      </div>

    </div>
  </div>
);
