import React from 'react';
import type { Story, Meta } from '@ladle/react';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from '.';
import { Button } from '@/src/ui/atoms/Buttons/Button';
import { Switch } from '@/src/ui/atoms/Switch';

const meta: Meta = {
  title: 'E Molecules/A Sheet',
  parameters: {
    docs: {
      description: {
        component:
          'A slide-in panel built on Radix Dialog, supporting all four sides with header, footer, and close button slots.',
      },
    },
  },
};

export default meta;

const sides = ['right', 'left', 'top', 'bottom'] as const;

export const Sides: Story = () => (
  <div className="flex flex-wrap gap-3">
    {sides.map((side) => (
      <Sheet key={side}>
        <SheetTrigger asChild>
          <Button variant="outline">{side}</Button>
        </SheetTrigger>
        <SheetContent side={side}>
          <SheetHeader>
            <SheetTitle>Sheet — {side}</SheetTitle>
            <SheetDescription>
              This panel slides in from the {side}. Use it for navigation, settings, or detail views.
            </SheetDescription>
          </SheetHeader>
          <div className="px-4 text-sm text-muted-foreground">
            Content goes here.
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button variant="default" className="w-full">Close</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    ))}
  </div>
);

export const WithSettings: Story = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline">Open settings</Button>
    </SheetTrigger>
    <SheetContent side="right">
      <SheetHeader>
        <SheetTitle>Settings</SheetTitle>
        <SheetDescription>Manage your preferences below.</SheetDescription>
      </SheetHeader>

      <div className="flex flex-col gap-1 px-4">
        {[
          { label: 'Email notifications', description: 'Receive updates via email', defaultChecked: true },
          { label: 'Push notifications', description: 'Alerts sent to your device', defaultChecked: false },
          { label: 'Dark mode', description: 'Use dark theme across the app', defaultChecked: false },
          { label: 'Analytics', description: 'Help improve the product', defaultChecked: true },
        ].map(({ label, description, defaultChecked }) => (
          <label key={label} className="flex items-center justify-between gap-4 py-3 border-b border-border last:border-0 cursor-pointer">
            <div>
              <p className="text-sm font-medium text-foreground">{label}</p>
              <p className="text-xs text-muted-foreground">{description}</p>
            </div>
            <Switch defaultChecked={defaultChecked} />
          </label>
        ))}
      </div>

      <SheetFooter>
        <Button variant="secondary" className="w-full">Save changes</Button>
        <SheetClose asChild>
          <Button variant="outline" className="w-full">Cancel</Button>
        </SheetClose>
      </SheetFooter>
    </SheetContent>
  </Sheet>
);

export const NoCloseButton: Story = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline">Open (no close button)</Button>
    </SheetTrigger>
    <SheetContent side="right" showCloseButton={false}>
      <SheetHeader>
        <SheetTitle>Custom close</SheetTitle>
        <SheetDescription>
          The built-in close button is hidden. Close is handled by the footer action.
        </SheetDescription>
      </SheetHeader>
      <div className="px-4 text-sm text-muted-foreground">
        Content area.
      </div>
      <SheetFooter>
        <SheetClose asChild>
          <Button variant="destructive" className="w-full">Discard and close</Button>
        </SheetClose>
      </SheetFooter>
    </SheetContent>
  </Sheet>
);
