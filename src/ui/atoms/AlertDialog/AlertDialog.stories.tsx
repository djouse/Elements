import React from 'react';
import type { Story, Meta } from '@ladle/react';
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogMedia,
} from '.';
import { Button } from '@/src/ui/atoms/Buttons/Button';
import { TrashIcon, TriangleAlertIcon, LogOutIcon } from 'lucide-react';

const meta: Meta = {
  title: 'D Atoms/I Alert Dialog',
  parameters: {
    docs: {
      description: {
        component:
          'A modal confirmation dialog built on Radix AlertDialog. Interrupts the user with a required decision — use sparingly for destructive or irreversible actions.',
      },
    },
  },
};

export default meta;

export const Default: Story = () => (
  <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button variant="outline">Open dialog</Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
        <AlertDialogDescription>
          This action cannot be undone. This will permanently delete your account and remove all associated data from our servers.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction variant="destructive">Delete account</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

export const Small: Story = () => (
  <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button variant="outline">Small dialog</Button>
    </AlertDialogTrigger>
    <AlertDialogContent size="sm">
      <AlertDialogHeader>
        <AlertDialogTitle>Remove item?</AlertDialogTitle>
        <AlertDialogDescription>
          This item will be permanently removed.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction variant="destructive">Remove</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

export const WithMedia: Story = () => (
  <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button variant="destructive">Delete project</Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogMedia>
          <TrashIcon />
        </AlertDialogMedia>
        <AlertDialogTitle>Delete project</AlertDialogTitle>
        <AlertDialogDescription>
          Deleting this project will remove all files, settings, and collaborators permanently. This cannot be undone.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Keep project</AlertDialogCancel>
        <AlertDialogAction variant="destructive">Yes, delete it</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

export const Warning: Story = () => (
  <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button variant="outline">Publish changes</Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogMedia>
          <TriangleAlertIcon />
        </AlertDialogMedia>
        <AlertDialogTitle>Publish to production?</AlertDialogTitle>
        <AlertDialogDescription>
          You are about to push changes to the live environment. All users will immediately see the updated version.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Review first</AlertDialogCancel>
        <AlertDialogAction>Publish now</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

export const SignOut: Story = () => (
  <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button variant="outline">Sign out</Button>
    </AlertDialogTrigger>
    <AlertDialogContent size="sm">
      <AlertDialogHeader>
        <AlertDialogMedia>
          <LogOutIcon />
        </AlertDialogMedia>
        <AlertDialogTitle>Sign out?</AlertDialogTitle>
        <AlertDialogDescription>
          You will be returned to the login screen.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Stay signed in</AlertDialogCancel>
        <AlertDialogAction>Sign out</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);
