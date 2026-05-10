import type { Story, Meta } from '@ladle/react';
import { ScrollArea, ScrollBar } from '.';

const meta: Meta = {
  title: 'D Atoms/E Scroll',
  parameters: {
    docs: {
      description: {
        component: 'A scroll area primitive with custom scrollbars, built on Radix UI.',
      },
    },
  },
};

export default meta;

const items = Array.from({ length: 30 }, (_, i) => `Item ${i + 1}`);

const tags = [
  'React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Radix UI',
  'shadcn/ui', 'Ladle', 'CVA', 'Node.js', 'Zod',
  'Framer Motion', 'Zustand', 'React Query', 'Prisma', 'tRPC',
];

export const Vertical: Story = () => (
  <ScrollArea className="h-64 w-64 rounded-md border border-border">
    <div className="p-4">
      <p className="mb-3 text-sm font-medium">Items</p>
      {items.map((item) => (
        <div key={item} className="py-2 text-sm border-b border-border last:border-0">
          {item}
        </div>
      ))}
    </div>
  </ScrollArea>
);

export const Horizontal: Story = () => (
  <ScrollArea className="w-72 whitespace-nowrap rounded-md border border-border">
    <div className="flex gap-3 p-4">
      {tags.map((tag) => (
        <span
          key={tag}
          className="inline-block rounded-full bg-muted px-3 py-1 text-sm text-muted-foreground"
        >
          {tag}
        </span>
      ))}
    </div>
    <ScrollBar orientation="horizontal" />
  </ScrollArea>
);

export const Both: Story = () => (
  <ScrollArea className="h-48 w-72 rounded-md border border-border">
    <div className="w-[600px] p-4">
      <p className="mb-3 text-sm font-medium">Wide + tall content</p>
      {items.slice(0, 15).map((item) => (
        <div key={item} className="py-2 text-sm border-b border-border last:border-0 w-[560px]">
          {item} — this row is intentionally wide to trigger horizontal scroll
        </div>
      ))}
    </div>
    <ScrollBar orientation="horizontal" />
  </ScrollArea>
);
