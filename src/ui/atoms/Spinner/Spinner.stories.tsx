import type { Story, Meta } from '@ladle/react';
import { Spinner } from '.';

const meta: Meta = {
  title: 'D Atoms/O Spinner',
  parameters: {
    docs: {
      description: {
        component:
          'A simple spinning loading indicator using the Loader2 icon from lucide-react. Size is controlled via the className prop.',
      },
    },
  },
};

export default meta;

export const Default: Story = () => <Spinner />;

export const Sizes: Story = () => (
  <div className="flex items-center gap-6">
    <div className="flex flex-col items-center gap-2">
      <Spinner className="size-3" />
      <span className="text-xs text-muted-foreground">size-3</span>
    </div>
    <div className="flex flex-col items-center gap-2">
      <Spinner className="size-4" />
      <span className="text-xs text-muted-foreground">size-4</span>
    </div>
    <div className="flex flex-col items-center gap-2">
      <Spinner className="size-6" />
      <span className="text-xs text-muted-foreground">size-6</span>
    </div>
    <div className="flex flex-col items-center gap-2">
      <Spinner className="size-8" />
      <span className="text-xs text-muted-foreground">size-8</span>
    </div>
    <div className="flex flex-col items-center gap-2">
      <Spinner className="size-12" />
      <span className="text-xs text-muted-foreground">size-12</span>
    </div>
  </div>
);

export const InButton: Story = () => (
  <div className="flex flex-wrap items-center gap-3">
    <button
      disabled
      className="inline-flex items-center gap-2 rounded-md border border-border bg-muted px-4 py-2 text-sm font-medium text-muted-foreground"
    >
      <Spinner />
      Saving…
    </button>
    <button
      disabled
      className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground opacity-80"
    >
      <Spinner className="text-primary-foreground" />
      Loading
    </button>
  </div>
);
