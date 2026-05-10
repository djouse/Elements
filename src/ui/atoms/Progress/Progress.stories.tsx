import React, { useEffect, useState } from 'react';
import type { Story, Meta } from '@ladle/react';
import { Progress } from '.';

const meta: Meta = {
  title: 'D Atoms/L Progress',
  parameters: {
    docs: {
      description: {
        component:
          'A slim progress bar built on Radix Progress. Displays completion percentage via a translated indicator on a muted track.',
      },
    },
  },
};

export default meta;

export const Static: Story = () => (
  <div className="flex w-64 flex-col gap-6">
    <div className="flex flex-col gap-2">
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>0%</span>
      </div>
      <Progress value={0} />
    </div>
    <div className="flex flex-col gap-2">
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>25%</span>
      </div>
      <Progress value={25} />
    </div>
    <div className="flex flex-col gap-2">
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>60%</span>
      </div>
      <Progress value={60} />
    </div>
    <div className="flex flex-col gap-2">
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>100%</span>
      </div>
      <Progress value={100} />
    </div>
  </div>
);

export const Animated: Story = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => (v >= 100 ? 0 : v + 5));
    }, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex w-64 flex-col gap-2">
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>Loading…</span>
        <span>{value}%</span>
      </div>
      <Progress value={value} />
    </div>
  );
};
