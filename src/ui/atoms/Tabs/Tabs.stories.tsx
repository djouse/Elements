import React from 'react';
import type { Story, Meta } from '@ladle/react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '.';

const meta: Meta = {
  title: 'D Atoms/H Tabs',
  parameters: {
    docs: {
      description: {
        component:
          'A tabbed interface built on Radix Tabs, supporting default pill and underline-line variants in both horizontal and vertical orientations.',
      },
    },
  },
};

export default meta;

export const Default: Story = () => (
  <Tabs defaultValue="account" className="w-80">
    <TabsList>
      <TabsTrigger value="account">Account</TabsTrigger>
      <TabsTrigger value="password">Password</TabsTrigger>
      <TabsTrigger value="settings">Settings</TabsTrigger>
    </TabsList>
    <TabsContent value="account">
      <p className="text-sm text-muted-foreground">Manage your account details here.</p>
    </TabsContent>
    <TabsContent value="password">
      <p className="text-sm text-muted-foreground">Change your password and security settings.</p>
    </TabsContent>
    <TabsContent value="settings">
      <p className="text-sm text-muted-foreground">Configure application preferences.</p>
    </TabsContent>
  </Tabs>
);

export const Line: Story = () => (
  <Tabs defaultValue="overview" className="w-80">
    <TabsList variant="line">
      <TabsTrigger value="overview">Overview</TabsTrigger>
      <TabsTrigger value="analytics">Analytics</TabsTrigger>
      <TabsTrigger value="reports">Reports</TabsTrigger>
    </TabsList>
    <TabsContent value="overview">
      <p className="text-sm text-muted-foreground">High-level summary of your data.</p>
    </TabsContent>
    <TabsContent value="analytics">
      <p className="text-sm text-muted-foreground">Detailed analytics and metrics.</p>
    </TabsContent>
    <TabsContent value="reports">
      <p className="text-sm text-muted-foreground">Exportable reports and insights.</p>
    </TabsContent>
  </Tabs>
);

export const Vertical: Story = () => (
  <Tabs defaultValue="profile" orientation="vertical" className="w-96">
    <TabsList className="w-32 shrink-0">
      <TabsTrigger value="profile">Profile</TabsTrigger>
      <TabsTrigger value="billing">Billing</TabsTrigger>
      <TabsTrigger value="team">Team</TabsTrigger>
      <TabsTrigger value="integrations">Integrations</TabsTrigger>
    </TabsList>
    <TabsContent value="profile">
      <p className="text-sm text-muted-foreground">Edit your public profile information.</p>
    </TabsContent>
    <TabsContent value="billing">
      <p className="text-sm text-muted-foreground">Manage your subscription and invoices.</p>
    </TabsContent>
    <TabsContent value="team">
      <p className="text-sm text-muted-foreground">Invite and manage team members.</p>
    </TabsContent>
    <TabsContent value="integrations">
      <p className="text-sm text-muted-foreground">Connect third-party services.</p>
    </TabsContent>
  </Tabs>
);

export const VerticalLine: Story = () => (
  <Tabs defaultValue="appearance" orientation="vertical" className="w-96">
    <TabsList variant="line" className="w-32 shrink-0">
      <TabsTrigger value="appearance">Appearance</TabsTrigger>
      <TabsTrigger value="notifications">Notifications</TabsTrigger>
      <TabsTrigger value="security">Security</TabsTrigger>
    </TabsList>
    <TabsContent value="appearance">
      <p className="text-sm text-muted-foreground">Theme and display preferences.</p>
    </TabsContent>
    <TabsContent value="notifications">
      <p className="text-sm text-muted-foreground">Control how you receive alerts.</p>
    </TabsContent>
    <TabsContent value="security">
      <p className="text-sm text-muted-foreground">Two-factor auth and session management.</p>
    </TabsContent>
  </Tabs>
);

export const Disabled: Story = () => (
  <Tabs defaultValue="active" className="w-80">
    <TabsList>
      <TabsTrigger value="active">Active</TabsTrigger>
      <TabsTrigger value="archived" disabled>Archived</TabsTrigger>
      <TabsTrigger value="deleted" disabled>Deleted</TabsTrigger>
    </TabsList>
    <TabsContent value="active">
      <p className="text-sm text-muted-foreground">Showing active items only.</p>
    </TabsContent>
    <TabsContent value="archived">
      <p className="text-sm text-muted-foreground">Archived items.</p>
    </TabsContent>
    <TabsContent value="deleted">
      <p className="text-sm text-muted-foreground">Deleted items.</p>
    </TabsContent>
  </Tabs>
);
