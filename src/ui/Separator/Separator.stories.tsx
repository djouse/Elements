import React from 'react';
import type { Story, Meta } from '@ladle/react';
import { Separator } from '.';

const meta: Meta = {
  title: 'Atoms/Separator',
  parameters: {
    docs: {
      description: {
        component: 'A visual divider for separating content horizontally or vertically.',
      },
    },
  },
};

export default meta;

export const Horizontal: Story = () => (
  <div className="w-64 flex flex-col gap-4">
    <p className="text-sm">Content above</p>
    <Separator />
    <p className="text-sm">Content below</p>
  </div>
);

export const Vertical: Story = () => (
  <div className="flex h-8 items-center gap-4">
    <span className="text-sm">Left</span>
    <Separator orientation="vertical" />
    <span className="text-sm">Right</span>
  </div>
);

export const BothOrientations: Story = () => (
  <div className="flex w-64 flex-col gap-6">
    <div className="flex flex-col gap-3">
      <p className="text-xs font-medium text-muted-foreground">Horizontal</p>
      <p className="text-sm">Above</p>
      <Separator />
      <p className="text-sm">Below</p>
    </div>
    <div className="flex flex-col gap-3">
      <p className="text-xs font-medium text-muted-foreground">Vertical</p>
      <div className="flex h-8 items-center gap-4">
        <span className="text-sm">Left</span>
        <Separator orientation="vertical" />
        <span className="text-sm">Right</span>
      </div>
    </div>
  </div>
);
