import React from 'react';
import type { Story, Meta } from '@ladle/react';
import { toast } from 'sonner';

const meta: Meta = {
  title: 'B Colors',
};

export default meta;

const Swatch = ({ name, bg, fg }: { name: string; bg: string; fg?: string }) => {
  const varName = fg ?? bg;

  const handleCopy = () => {
    navigator.clipboard.writeText(varName).then(() => {
      toast.success(`Copied ${varName}`);
    });
  };

  return (
    <button
      onClick={handleCopy}
      className="group flex flex-col gap-1.5 text-left cursor-pointer"
      title={`Click to copy ${varName}`}
    >
      <div
        className="h-12 w-full rounded-md border border-border transition-transform group-hover:scale-105"
        style={{ background: bg }}
      />
      <span className="text-xs font-medium text-foreground">{name}</span>
      <span className="text-xs font-mono text-muted-foreground group-hover:text-primary transition-colors">{varName}</span>
    </button>
  );
};

const Group = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="flex flex-col gap-4">
    <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{title}</h3>
    <div className="grid grid-cols-4 gap-4 sm:grid-cols-6">
      {children}
    </div>
  </div>
);

export const Palette: Story = () => (
  <div className="flex max-w-3xl flex-col gap-10 px-6 py-8">
    <Group title="Base">
      <Swatch name="background" bg="var(--background)" fg="--background" />
      <Swatch name="foreground" bg="var(--foreground)" fg="--foreground" />
      <Swatch name="border" bg="var(--border)" fg="--border" />
      <Swatch name="input" bg="var(--input)" fg="--input" />
      <Swatch name="ring" bg="var(--ring)" fg="--ring" />
    </Group>

    <Group title="Brand">
      <Swatch name="primary" bg="var(--primary)" fg="--primary" />
      <Swatch name="primary-fg" bg="var(--primary-foreground)" fg="--primary-foreground" />
      <Swatch name="secondary" bg="var(--secondary)" fg="--secondary" />
      <Swatch name="secondary-fg" bg="var(--secondary-foreground)" fg="--secondary-foreground" />
    </Group>

    <Group title="Muted">
      <Swatch name="muted" bg="var(--muted)" fg="--muted" />
      <Swatch name="muted-neutral" bg="var(--muted-neutral)" fg="--muted-neutral" />
      <Swatch name="muted-fg" bg="var(--muted-foreground)" fg="--muted-foreground" />
    </Group>

    <Group title="Accent &amp; Surface">
      <Swatch name="accent" bg="var(--accent)" fg="--accent" />
      <Swatch name="accent-fg" bg="var(--accent-foreground)" fg="--accent-foreground" />
      <Swatch name="card" bg="var(--card)" fg="--card" />
      <Swatch name="popover" bg="var(--popover)" fg="--popover" />
    </Group>

    <Group title="Semantic">
      <Swatch name="destructive" bg="var(--destructive)" fg="--destructive" />
      <Swatch name="semantic-bg" bg="var(--semantic-background)" fg="--semantic-background" />
      <Swatch name="semantic-border" bg="var(--semantic-border)" fg="--semantic-border" />
    </Group>

    <Group title="Chart">
      <Swatch name="chart-1" bg="var(--chart-1)" fg="--chart-1" />
      <Swatch name="chart-2" bg="var(--chart-2)" fg="--chart-2" />
      <Swatch name="chart-3" bg="var(--chart-3)" fg="--chart-3" />
      <Swatch name="chart-4" bg="var(--chart-4)" fg="--chart-4" />
      <Swatch name="chart-5" bg="var(--chart-5)" fg="--chart-5" />
    </Group>

    <Group title="Sidebar">
      <Swatch name="sidebar" bg="var(--sidebar)" fg="--sidebar" />
      <Swatch name="sidebar-fg" bg="var(--sidebar-foreground)" fg="--sidebar-foreground" />
      <Swatch name="sidebar-primary" bg="var(--sidebar-primary)" fg="--sidebar-primary" />
      <Swatch name="sidebar-accent" bg="var(--sidebar-accent)" fg="--sidebar-accent" />
      <Swatch name="sidebar-border" bg="var(--sidebar-border)" fg="--sidebar-border" />
    </Group>
  </div>
);
