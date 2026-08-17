import { useState } from 'react';
import type { Story, Meta } from '@ladle/react';
import { Slider } from '.';

const meta: Meta = {
  title: 'D Atoms/N Slider',
  parameters: {
    docs: {
      description: {
        component:
          'A range slider built on Radix Slider. Supports single and range (multi-thumb) values in both horizontal and vertical orientations.',
      },
    },
  },
};

export default meta;

export const Default: Story = () => {
  const [value, setValue] = useState([40]);
  return (
    <div className="flex w-64 flex-col gap-3">
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>Volume</span>
        <span>{value[0]}%</span>
      </div>
      <Slider value={value} onValueChange={setValue} min={0} max={100} step={1} />
    </div>
  );
};

export const Range: Story = () => {
  const [value, setValue] = useState([20, 80]);
  return (
    <div className="flex w-64 flex-col gap-3">
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>Price range</span>
        <span>${value[0]} – ${value[1]}</span>
      </div>
      <Slider value={value} onValueChange={setValue} min={0} max={100} step={1} />
    </div>
  );
};

export const Stepped: Story = () => {
  const [value, setValue] = useState([3]);
  const labels = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  return (
    <div className="flex w-64 flex-col gap-3">
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>Size</span>
        <span>{labels[value[0]]}</span>
      </div>
      <Slider value={value} onValueChange={setValue} min={0} max={5} step={1} />
    </div>
  );
};

export const Disabled: Story = () => (
  <div className="flex w-64 flex-col gap-3">
    <span className="text-xs text-muted-foreground">Disabled</span>
    <Slider defaultValue={[60]} disabled />
  </div>
);

export const Vertical: Story = () => {
  const [value, setValue] = useState([50]);
  return (
    <div className="flex flex-col items-center gap-3 h-48">
      <span className="text-xs text-muted-foreground">{value[0]}%</span>
      <Slider
        value={value}
        onValueChange={setValue}
        orientation="vertical"
        className="h-full"
      />
    </div>
  );
};
