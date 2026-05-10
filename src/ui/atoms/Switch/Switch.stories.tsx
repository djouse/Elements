import React from 'react';
import type { Story, Meta } from '@ladle/react';
import { Switch } from '.';

const meta: Meta = {
  title: 'D Atoms/G Switch',
  parameters: {
    docs: {
      description: {
        component: 'A toggle switch built on Radix UI with sm, default, and lg sizes.',
      },
    },
  },
};

export default meta;

const sizes = ['sm', 'default'] as const;

const Row = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div className="flex items-center justify-between py-3 border-b border-border last:border-0">
    <span className="text-sm text-muted-foreground">{label}</span>
    {children}
  </div>
);

export const Default: Story = () => (
  <div className="flex items-center gap-4">
    <Switch />
    <Switch defaultChecked />
  </div>
);

export const Sizes: Story = () => (
  <div className="w-64">
    {sizes.map((size) => (
      <Row key={size} label={size}>
        <div className="flex items-center gap-3">
          <Switch size={size} />
          <Switch size={size} defaultChecked />
        </div>
      </Row>
    ))}
  </div>
);

export const Disabled: Story = () => (
  <div className="flex items-center gap-4">
    <Switch disabled />
    <Switch disabled defaultChecked />
  </div>
);

export const WithLabel: Story = () => (
  <div className="flex w-64 flex-col gap-4">
    <label className="flex items-center justify-between gap-3 cursor-pointer">
      <div>
        <p className="text-sm font-medium text-foreground">Notifications</p>
        <p className="text-xs text-muted-foreground">Receive email updates</p>
      </div>
      <Switch />
    </label>
    <label className="flex items-center justify-between gap-3 cursor-pointer">
      <div>
        <p className="text-sm font-medium text-foreground">Dark mode</p>
        <p className="text-xs text-muted-foreground">Use dark theme across the app</p>
      </div>
      <Switch defaultChecked />
    </label>
  </div>
);
