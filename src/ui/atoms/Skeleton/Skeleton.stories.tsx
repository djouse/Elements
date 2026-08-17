import type { Story, Meta } from '@ladle/react';
import { Skeleton } from '.';

const meta: Meta = {
  title: 'D Atoms/M Skeleton',
  parameters: {
    docs: {
      description: {
        component:
          'A pulsing placeholder block for loading states. Compose multiple Skeleton elements to mimic the shape of the content being loaded.',
      },
    },
  },
};

export default meta;

export const Default: Story = () => (
  <div className="flex flex-col gap-2 w-64">
    <Skeleton className="h-4 w-3/4" />
    <Skeleton className="h-4 w-full" />
    <Skeleton className="h-4 w-1/2" />
  </div>
);

export const Card: Story = () => (
  <div className="flex flex-col gap-3 w-64 rounded-xl border border-border p-4">
    <Skeleton className="h-32 w-full rounded-lg" />
    <div className="flex flex-col gap-2">
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-1/2" />
    </div>
    <div className="flex gap-2">
      <Skeleton className="h-8 w-20 rounded-md" />
      <Skeleton className="h-8 w-20 rounded-md" />
    </div>
  </div>
);

export const Profile: Story = () => (
  <div className="flex items-center gap-3">
    <Skeleton className="size-10 rounded-full shrink-0" />
    <div className="flex flex-col gap-2 flex-1">
      <Skeleton className="h-3.5 w-32" />
      <Skeleton className="h-3 w-24" />
    </div>
  </div>
);

export const List: Story = () => (
  <div className="flex flex-col gap-4 w-64">
    {Array.from({ length: 5 }).map((_, i) => (
      <div key={i} className="flex items-center gap-3">
        <Skeleton className="size-8 rounded-md shrink-0" />
        <div className="flex flex-col gap-1.5 flex-1">
          <Skeleton className="h-3.5 w-3/4" />
          <Skeleton className="h-3 w-1/2" />
        </div>
      </div>
    ))}
  </div>
);
