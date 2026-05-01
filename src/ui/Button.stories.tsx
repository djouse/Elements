import type { Story, Meta } from '@ladle/react';
import { Button } from './button';

const meta: Meta = {
  title: 'Atoms/Buttons/Primary Button',
  parameters: {
    docs: {
      description: {
        component:
          'A versatile button component with multiple variants and sizes, built using shadcn/ui and CSS custom properties.',
      },
    },
  },
};

export default meta;

export const button: Story = () => <Button variant="default">My Button</Button>;
