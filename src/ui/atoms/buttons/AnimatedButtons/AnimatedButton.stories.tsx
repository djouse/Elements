import React from 'react';
import type { Story, Meta } from '@ladle/react';
import { AnimatedButton } from '.';

const meta: Meta = {
  title: 'Atoms/Buttons/Animated Button',
  parameters: {
    docs: {
      description: {
        component:
          'A button with an SVG stroke-dasharray border animation that collapses to a dot at the center of the left edge on hover.',
      },
    },
  },
};

export default meta;

const sizes = ['default', 'xs', 'sm', 'lg'] as const;

export const Sizes: Story = () => (
  <div className="flex flex-wrap items-center gap-4">
    {sizes.map((size) => (
      <AnimatedButton key={size} size={size}>
        {size}
      </AnimatedButton>
    ))}
  </div>
);

export const Default: Story = () => (
  <AnimatedButton>Animated Button</AnimatedButton>
);
