import type { Story, Meta } from '@ladle/react';
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
} from '.';
import { Button } from '@/ui/atoms/buttons/Button';

const meta: Meta = {
  title: 'D Atoms/K Drawer',
  parameters: {
    docs: {
      description: {
        component:
          'A gesture-driven drawer built on Vaul. Slides in from any edge with a drag handle on bottom/top variants.',
      },
    },
  },
};

export default meta;

export const Bottom: Story = () => (
  <Drawer>
    <DrawerTrigger asChild>
      <Button variant="outline">Open bottom drawer</Button>
    </DrawerTrigger>
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>Bottom drawer</DrawerTitle>
        <DrawerDescription>Drag down or click outside to dismiss.</DrawerDescription>
      </DrawerHeader>
      <div className="px-4 pb-2 text-sm text-muted-foreground">
        Content goes here. This drawer slides up from the bottom and supports drag-to-dismiss.
      </div>
      <DrawerFooter>
        <DrawerClose asChild>
          <Button variant="default" className="w-full">Close</Button>
        </DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
);

export const Top: Story = () => (
  <Drawer direction="top">
    <DrawerTrigger asChild>
      <Button variant="outline">Open top drawer</Button>
    </DrawerTrigger>
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>Top drawer</DrawerTitle>
        <DrawerDescription>Slides down from the top of the screen.</DrawerDescription>
      </DrawerHeader>
      <div className="px-4 pb-2 text-sm text-muted-foreground">
        Useful for notifications, banners, or quick actions.
      </div>
      <DrawerFooter>
        <DrawerClose asChild>
          <Button variant="default" className="w-full">Dismiss</Button>
        </DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
);

export const Right: Story = () => (
  <Drawer direction="right">
    <DrawerTrigger asChild>
      <Button variant="outline">Open right drawer</Button>
    </DrawerTrigger>
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>Right drawer</DrawerTitle>
        <DrawerDescription>Slides in from the right edge.</DrawerDescription>
      </DrawerHeader>
      <div className="flex flex-col gap-1 px-4">
        {['Profile', 'Settings', 'Notifications', 'Help'].map((item) => (
          <div key={item} className="py-3 border-b border-border last:border-0 text-sm text-foreground">
            {item}
          </div>
        ))}
      </div>
      <DrawerFooter>
        <DrawerClose asChild>
          <Button variant="outline" className="w-full">Close</Button>
        </DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
);

export const Left: Story = () => (
  <Drawer direction="left">
    <DrawerTrigger asChild>
      <Button variant="outline">Open left drawer</Button>
    </DrawerTrigger>
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>Navigation</DrawerTitle>
        <DrawerDescription>Slides in from the left edge.</DrawerDescription>
      </DrawerHeader>
      <nav className="flex flex-col gap-1 px-4">
        {['Dashboard', 'Projects', 'Team', 'Reports', 'Settings'].map((item) => (
          <div key={item} className="py-2.5 text-sm text-foreground hover:text-primary cursor-pointer">
            {item}
          </div>
        ))}
      </nav>
      <DrawerFooter>
        <DrawerClose asChild>
          <Button variant="outline" className="w-full">Close</Button>
        </DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
);
