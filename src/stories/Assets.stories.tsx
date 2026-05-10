import React from 'react';
import type { Story, Meta } from '@ladle/react';
import { toast } from 'sonner';

const meta: Meta = {
  title: 'G Assets',
};

export default meta;

// ── Reusable helpers ──────────────────────────────────────────────────────────

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="flex flex-col gap-4">
    <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{title}</h3>
    {children}
  </div>
);

const CopyButton = ({ value, label }: { value: string; label: string }) => (
  <button
    onClick={() => navigator.clipboard.writeText(value).then(() => toast.success(`Copied ${label}`))}
    className="group flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1 text-xs text-muted-foreground transition-colors hover:border-muted-neutral hover:text-foreground"
    title={`Copy ${label}`}
  >
    {label}
  </button>
);

// ── Favicon ───────────────────────────────────────────────────────────────────

const FAVICON_SIZES = [16, 24, 32, 48, 64, 128, 256] as const;

export const Favicon: Story = () => (
  <div className="flex max-w-2xl flex-col gap-10 px-6 py-8">
    <Section title="Favicon">
      <div className="flex flex-wrap items-end gap-8">
        {FAVICON_SIZES.map((size) => (
          <div key={size} className="flex flex-col items-center gap-3">
            <div className="flex items-center justify-center rounded-md border border-border bg-card p-2">
              <img
                src="/favicon.svg"
                width={size}
                height={size}
                alt={`favicon ${size}px`}
                className="block"
              />
            </div>
            <span className="text-xs text-muted-foreground tabular-nums">{size}px</span>
          </div>
        ))}
      </div>
    </Section>

    <Section title="On dark background">
      <div className="flex flex-wrap items-end gap-8 rounded-xl bg-foreground p-6">
        {[16, 32, 64, 128].map((size) => (
          <div key={size} className="flex flex-col items-center gap-3">
            <img
              src="/favicon.svg"
              width={size}
              height={size}
              alt={`favicon ${size}px`}
              className="block invert"
            />
            <span className="text-xs tabular-nums text-background/60">{size}px</span>
          </div>
        ))}
      </div>
    </Section>

    <Section title="Usage">
      <div className="flex flex-wrap gap-2">
        <CopyButton value="/favicon.svg" label="/favicon.svg" />
        <CopyButton
          value='<link rel="icon" href="/favicon.svg" type="image/svg+xml" />'
          label="<link> tag"
        />
      </div>
    </Section>
  </div>
);

// ── Icon Sprite ───────────────────────────────────────────────────────────────

const SPRITE_ICONS = [
  'bluesky-icon',
  'discord-icon',
  'documentation-icon',
  'github-icon',
  'social-icon',
  'x-icon',
] as const;

const ICON_SIZES = [16, 24, 32, 48] as const;

const SpriteIcon = ({
  id,
  size = 24,
  className,
}: {
  id: string;
  size?: number;
  className?: string;
}) => (
  <svg width={size} height={size} aria-hidden className={className}>
    <use href={`/icons.svg#${id}`} />
  </svg>
);

export const Icons: Story = () => (
  <div className="flex max-w-2xl flex-col gap-10 px-6 py-8">
    <Section title="Icon Sprite — /icons.svg">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {SPRITE_ICONS.map((id) => (
          <button
            key={id}
            onClick={() => navigator.clipboard.writeText(`<SpriteIcon id="${id}" />`).then(() => toast.success(`Copied #${id}`))}
            className="group flex items-center gap-3 rounded-xl border border-border bg-card p-4 text-left transition-colors hover:border-muted-neutral hover:bg-muted/40"
          >
            <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-muted">
              <SpriteIcon id={id} size={20} />
            </div>
            <div className="min-w-0">
              <p className="truncate text-xs font-medium text-foreground">#{id}</p>
              <p className="text-[10px] text-muted-foreground group-hover:text-primary transition-colors">
                Click to copy
              </p>
            </div>
          </button>
        ))}
      </div>
    </Section>

    <Section title="Sizes">
      <div className="flex flex-wrap items-end gap-8">
        {ICON_SIZES.map((size) => (
          <div key={size} className="flex flex-col items-center gap-3">
            <div className="flex items-center justify-center rounded-md border border-border bg-card p-3">
              <SpriteIcon id="github-icon" size={size} />
            </div>
            <span className="text-xs text-muted-foreground tabular-nums">{size}px</span>
          </div>
        ))}
      </div>
    </Section>

    <Section title="Usage">
      <div className="flex flex-col gap-2">
        <div className="flex flex-wrap gap-2">
          <CopyButton value='/icons.svg' label="/icons.svg" />
          <CopyButton
            value={`<svg width="24" height="24"><use href="/icons.svg#github-icon" /></svg>`}
            label="SVG <use> snippet"
          />
        </div>
        <div className="rounded-lg border border-border bg-muted px-4 py-3">
          <pre className="text-xs text-muted-foreground leading-relaxed">{`<svg width="24" height="24">
  <use href="/icons.svg#github-icon" />
</svg>`}</pre>
        </div>
      </div>
    </Section>
  </div>
);

// ── Fonts ─────────────────────────────────────────────────────────────────────

const FONT_WEIGHTS = [300, 400, 500, 600, 700, 800] as const;

export const Fonts: Story = () => (
  <div className="flex max-w-2xl flex-col gap-10 px-6 py-8">
    <Section title="Host Grotesk — /fonts/Host_Grotesk/">
      <div className="flex flex-col gap-4">
        {FONT_WEIGHTS.map((weight) => (
          <div key={weight} className="flex items-baseline justify-between gap-4 border-b border-border pb-4 last:border-0">
            <span
              className="text-2xl text-foreground"
              style={{ fontFamily: 'Host Grotesk, sans-serif', fontWeight: weight }}
            >
              The quick brown fox
            </span>
            <span className="shrink-0 text-xs tabular-nums text-muted-foreground">{weight}</span>
          </div>
        ))}
      </div>
    </Section>

    <Section title="Italic">
      <div className="flex flex-col gap-3">
        {[400, 500, 700].map((weight) => (
          <div key={weight} className="flex items-baseline justify-between gap-4 border-b border-border pb-3 last:border-0">
            <span
              className="text-xl text-foreground"
              style={{ fontFamily: 'Host Grotesk, sans-serif', fontWeight: weight, fontStyle: 'italic' }}
            >
              The quick brown fox jumps over the lazy dog
            </span>
            <span className="shrink-0 text-xs tabular-nums text-muted-foreground">{weight}i</span>
          </div>
        ))}
      </div>
    </Section>

    <Section title="Files">
      <div className="flex flex-wrap gap-2">
        <CopyButton value="HostGrotesk-VariableFont_wght.ttf" label="Variable (normal)" />
        <CopyButton value="HostGrotesk-Italic-VariableFont_wght.ttf" label="Variable (italic)" />
      </div>
    </Section>
  </div>
);
