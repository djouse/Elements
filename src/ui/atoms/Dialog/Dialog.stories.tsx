import type { Story, Meta } from '@ladle/react';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '.';
import { Button } from '@/ui/atoms/buttons/Button';

const meta: Meta = {
  title: 'D Atoms/J Dialog',
  parameters: {
    docs: {
      description: {
        component:
          'A modal dialog built on Radix Dialog. Focuses content in a layer above the page with an optional close button, header, and footer.',
      },
    },
  },
};

export default meta;

export const Default: Story = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline">Open dialog</Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Edit profile</DialogTitle>
        <DialogDescription>
          Make changes to your profile. Click save when you are done.
        </DialogDescription>
      </DialogHeader>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-foreground">Name</label>
          <input
            className="rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
            defaultValue="José Dias"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-foreground">Username</label>
          <input
            className="rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
            defaultValue="@josedias"
          />
        </div>
      </div>
      <DialogFooter showCloseButton>
        <Button variant="default">Save changes</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);

export const NoCloseButton: Story = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline">Open (no × button)</Button>
    </DialogTrigger>
    <DialogContent showCloseButton={false}>
      <DialogHeader>
        <DialogTitle>Terms of service</DialogTitle>
        <DialogDescription>
          Please read and accept the terms before continuing.
        </DialogDescription>
      </DialogHeader>
      <p className="text-sm text-muted-foreground leading-relaxed">
        By using this service you agree to our terms of use, privacy policy, and cookie policy. These terms are updated periodically — continued use constitutes acceptance.
      </p>
      <DialogFooter>
        <DialogClose asChild>
          <Button variant="outline">Decline</Button>
        </DialogClose>
        <DialogClose asChild>
          <Button variant="default">Accept</Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);

export const Destructive: Story = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="destructive">Delete account</Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Delete account</DialogTitle>
        <DialogDescription>
          This will permanently delete your account and all associated data. This action cannot be undone.
        </DialogDescription>
      </DialogHeader>
      <DialogFooter showCloseButton>
        <Button variant="destructive">Yes, delete account</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);
