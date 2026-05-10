import type { Story, Meta } from '@ladle/react';

const meta: Meta = {
  title: 'D Atoms/A Overview',
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
          elements / atoms
        </p>
        <h1 className="text-3xl font-bold text-foreground">Atoms</h1>
        <p className="mt-3 text-base text-muted-foreground leading-relaxed">
          Primitive building blocks of the design system. Each atom is a single-purpose component
          with a typed variant API, composable slots, and full dark-mode support.
          They are built with CVA, Radix UI, and Tailwind CSS v4.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Components</h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <ComponentCard
            href="?story=d-atoms--b-buttons--button--buttons"
            label="Button"
            description="Multi-variant button with outline, secondary, destructive, link, and simplified styles."
            slots={['variant', 'size', 'asChild']}
          />
          <ComponentCard
            href="?story=d-atoms--b-buttons--animated-button--default"
            label="Animated Button"
            description="SVG stroke-dasharray border animation that collapses to a dot on hover. Offset is calculated dynamically from the rendered dimensions."
            slots={['size', 'asChild']}
          />
          <ComponentCard
            href="?story=d-atoms--c-card--cards"
            label="Card"
            description="Composable card surface with header, title, description, action, content, and footer slots."
            slots={['CardHeader', 'CardTitle', 'CardDescription', 'CardAction', 'CardContent', 'CardFooter']}
          />
          <ComponentCard
            href="?story=d-atoms--d-items--variants"
            label="Item"
            description="List item primitives for building menus, feeds, and data rows with optional media and inline actions."
            slots={['ItemMedia', 'ItemContent', 'ItemTitle', 'ItemDescription', 'ItemActions', 'ItemHeader', 'ItemFooter']}
          />
          <ComponentCard
            href="?story=d-atoms--e-scroll--vertical"
            label="Scroll Area"
            description="Custom-scrollbar scroll container supporting vertical, horizontal, and both axes."
            slots={['ScrollArea', 'ScrollBar']}
          />
          <ComponentCard
            href="?story=d-atoms--f-separator--horizontal"
            label="Separator"
            description="A thin divider line for separating content, available in horizontal and vertical orientations."
            slots={['orientation', 'decorative']}
          />
          <ComponentCard
            href="?story=d-atoms--g-switch--default"
            label="Switch"
            description="A toggle switch built on Radix UI with sm and default sizes."
            slots={['size', 'checked', 'disabled']}
          />
          <ComponentCard
            href="?story=d-atoms--h-tabs--default"
            label="Tabs"
            description="Tabbed navigation built on Radix Tabs with default pill and underline-line variants, supporting horizontal and vertical orientations."
            slots={['TabsList', 'TabsTrigger', 'TabsContent', 'variant', 'orientation']}
          />
          <ComponentCard
            href="?story=d-atoms--i-alert-dialog--default"
            label="Alert Dialog"
            description="A modal confirmation dialog for destructive or irreversible actions, with optional media slot for icon illustration."
            slots={['AlertDialogTrigger', 'AlertDialogContent', 'AlertDialogMedia', 'AlertDialogAction', 'AlertDialogCancel', 'size']}
          />
          <ComponentCard
            href="?story=d-atoms--j-dialog--default"
            label="Dialog"
            description="A general-purpose modal built on Radix Dialog with header, footer, and optional close button slots."
            slots={['DialogTrigger', 'DialogContent', 'DialogHeader', 'DialogFooter', 'DialogTitle', 'DialogDescription', 'showCloseButton']}
          />
          <ComponentCard
            href="?story=d-atoms--k-drawer--bottom"
            label="Drawer"
            description="A gesture-driven overlay built on Vaul. Slides in from any edge with a drag handle on bottom/top variants."
            slots={['DrawerTrigger', 'DrawerContent', 'DrawerHeader', 'DrawerFooter', 'direction']}
          />
          <ComponentCard
            href="?story=d-atoms--l-progress--static"
            label="Progress"
            description="A slim progress bar that tracks completion percentage via a translated indicator on a muted track."
            slots={['value']}
          />
          <ComponentCard
            href="?story=d-atoms--m-skeleton--default"
            label="Skeleton"
            description="A pulsing placeholder block for loading states. Compose multiple elements to mimic the target content shape."
            slots={['className']}
          />
          <ComponentCard
            href="?story=d-atoms--n-slider--default"
            label="Slider"
            description="A range input built on Radix Slider supporting single and multi-thumb values in horizontal and vertical orientations."
            slots={['value', 'defaultValue', 'min', 'max', 'step', 'orientation', 'disabled']}
          />
          <ComponentCard
            href="?story=d-atoms--o-spinner--default"
            label="Spinner"
            description="A spinning loading indicator using the Loader2 icon. Size is controlled via className."
            slots={['className']}
          />
          <ComponentCard
            href="?story=d-atoms--p-chart--bar"
            label="Chart"
            description="A Recharts wrapper with CSS variable color injection. Supports bar, line, area, and donut charts with tooltip and legend."
            slots={['ChartContainer', 'ChartTooltip', 'ChartLegend', 'ChartConfig', 'config']}
          />
        </div>
      </div>

      <div className="rounded-xl border border-border bg-card p-5">
        <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Conventions</h2>
        <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
          <li>Components live under <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">src/ui/&lt;category&gt;/&lt;Name&gt;/index.tsx</code></li>
          <li>Stories sit alongside as <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">&lt;Name&gt;.stories.tsx</code></li>
          <li>Variants and sizes are typed via <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">cva()</code> with compound variants</li>
          <li><code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">data-slot</code>, <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">data-variant</code>, <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">data-size</code> attributes applied for CSS targeting</li>
          <li>The <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">asChild</code> pattern (Radix <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">Slot.Root</code>) is supported where composition is needed</li>
        </ul>
      </div>

    </div>
  </div>
);
