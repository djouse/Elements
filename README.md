# elements

UI component library sandbox — a space for building, documenting, and iterating on reusable React components.

## Stack

- **React 19** + **TypeScript**
- **Tailwind CSS v4** — CSS-first config, no `tailwind.config.ts`
- **shadcn/ui** + **Radix UI** — headless primitives and design tokens
- **CVA** (class-variance-authority) — typed, multi-dimensional variant API
- **Ladle** — component story browser for visual development
- **Vite 8** — dev server and build

## Getting started

```bash
yarn install
yarn ladle     # open the component story browser (recommended for component dev)
yarn dev       # open the main Vite app
```

## Commands

| Command | Description |
|---|---|
| `yarn dev` | Start the Vite dev server |
| `yarn ladle` | Start the Ladle story browser |
| `yarn build` | Type-check and build for production |
| `yarn lint` | Run ESLint |

## Project structure

```
src/
  ui/
    buttons/
      Button/
        index.tsx            # Component
        Button.stories.tsx   # Ladle story
  global.css                 # Tailwind v4 theme + font definitions
lib/
  utils.ts                   # cn() utility (clsx + tailwind-merge)
.ladle/
  config.mjs                 # Ladle config
  vite.ladle.config.ts       # Vite config for Ladle
public/
  fonts/                     # Self-hosted Host Grotesk variable font
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
