# elements

UI component library sandbox — a space for building, documenting, and iterating on reusable React components.

## Stack

- **React 19** + **TypeScript**
- **Tailwind CSS v4** — CSS-first config, no `tailwind.config.ts`
- **shadcn/ui** + **Radix UI** — headless primitives and design tokens
- **CVA** (class-variance-authority) — typed, multi-dimensional variant API
- **Ladle** — component story browser for visual development
- **tsc** + **tsc-alias** — the entire build; no bundler

There is no application shell and no bundler in the build path. The package compiles
straight to ESM with `tsc`, and `tsc-alias` rewrites the `@/*` path aliases to relative
specifiers with explicit `.js` extensions so the output is valid Node ESM.

Vite is still present, but only as an implementation detail of Ladle — it powers the story
browser's dev server via [`.ladle/vite.ladle.config.ts`](.ladle/vite.ladle.config.ts) and is
not involved in `yarn build`.

## Getting started

```bash
yarn install
yarn ladle     # open the component story browser (recommended for component dev)
yarn build     # compile the library to dist/
```

## Commands

| Command | Description |
|---|---|
| `yarn ladle` | Start the Ladle story browser |
| `yarn build` | Compile `src/` to `dist/` via `tsc` + `tsc-alias` |
| `yarn dev` | Same as `build`, in watch mode |
| `yarn lint` | Run ESLint |
| `yarn lint:fix` | Run ESLint with `--fix` |

## Build output

`yarn build` uses [`tsconfig.build.json`](tsconfig.build.json), which extends the base config
and excludes `src/stories/` and every `*.stories.tsx` — stories are Ladle-only and never ship.
The base [`tsconfig.json`](tsconfig.json) still covers all of `src/`, so stories keep their
type-checking and alias resolution in the editor.

The package entry is [`src/index.ts`](src/index.ts), a barrel re-exporting every component and
the `cn` utility. `react` and `react-dom` are peer dependencies, so consumers supply their own
copy rather than getting a duplicate React.

## Project structure

Components are organised by atomic design level, each in its own folder with its story
alongside it.

```
src/
  index.ts                     # Package entry — barrel of every export
  ui/
    atoms/
      buttons/
        Button/
          index.tsx            # Component
          Button.stories.tsx   # Ladle story
    molecules/
    organisms/
  stories/                     # Docs-only stories (introduction, colors, typography, assets)
  lib/
    utils.ts                   # cn() utility (clsx + tailwind-merge)
  global.css                   # Tailwind v4 theme + font definitions
.ladle/
  config.mjs                   # Ladle config — story globs, addons
  vite.ladle.config.ts         # Vite config, used only by Ladle
  components.tsx               # Global provider (theme + Toaster)
public/
  fonts/                       # Self-hosted Host Grotesk variable font
```

## Component API conventions

Components use **CVA** for a composable, type-safe variant system. Each component exposes independent dimensions — for example, the `Button`:

```tsx
<Button variant="outline" color="destructive" size="sm">
  Delete
</Button>
```

| Prop | Values | Default |
|---|---|---|
| `variant` | `default` \| `outline` \| `secondary` \| `destructive` \| `link` | `default` |
| `color` | `primary` \| `secondary` \| `destructive` | `primary` |
| `size` | `default` \| `xs` \| `sm` \| `lg` \| `icon` \| `icon-xs` \| `icon-sm` \| `icon-lg` | `default` |

`variant` controls the visual shape; `color` controls the semantic color token — they compose via compound variants.

## Design tokens

Tokens are defined as CSS custom properties by shadcn/ui and mapped to Tailwind utilities in `src/global.css` via `@theme inline`. Key tokens: `--primary`, `--secondary`, `--destructive`, `--muted`, `--background`, `--foreground`, `--border`, `--ring`.

## Fonts

- **Inter** (variable) — loaded via `@fontsource-variable/inter`
- **Host Grotesk** (variable) — self-hosted in `public/fonts/`
