import React from 'react';
import type { Story, Meta } from '@ladle/react';
import { Button } from '.';

const meta: Meta = {
  title: 'D Atoms/B Buttons/Button',
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

const variants = ['default', 'outline', 'secondary', 'destructive', 'link', 'simplified'] as const;
const sizes = ['default', 'xs', 'sm', 'lg'] as const;

const ButtonGrid = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-wrap gap-2 mb-4">
    {children}
  </div>
);

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="mb-8">
    <h3 className="mb-2 text-sm font-medium">
      {title}
    </h3>
    {children}
  </div>
);

const renderButtons = ({ size }: { size: typeof sizes[number] }) => (
  <ButtonGrid>
    {variants.map((variant) => (
      <Button key={variant} variant={variant} size={size}>
        {variant}
      </Button>
    ))}
  </ButtonGrid>
);

export const Buttons: Story = () => (
  <div>
    <header className="flex flex-col pr-8 pb-16">
      <div className="text-2xl font-bold mb-4">Button Variants</div>
      <div className="">Highlighted variantes according to</div>
      <div className="">type and size</div>
    </header>

    {sizes.map((size) => (
      <Section key={size} title={size}>
        {renderButtons({ size })}
      </Section>
    ))}
  </div>
);

