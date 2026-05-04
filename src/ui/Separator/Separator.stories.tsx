import { Separator } from '.';
import type { Story, Meta } from '@ladle/react';

const meta: Meta = {
  title: 'Atoms/Separator',
  parameters: {
    docs: {
      description: {
        component:
          'A versatile separator component for dividing content, built using shadcn/ui and CSS custom properties.',
      },
    },
  },
};

export default meta;

export const Separators: Story = () => (
  <div className="flex flex-col gap-4">
    <Separator />
    <Separator orientation="vertical" />
  </div>
);