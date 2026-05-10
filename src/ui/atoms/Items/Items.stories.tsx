import type { Story, Meta } from '@ladle/react';
import {
  Item,
  ItemGroup,
  ItemSeparator,
  ItemMedia,
  ItemContent,
  ItemTitle,
  ItemDescription,
  ItemActions,
  ItemHeader,
  ItemFooter,
} from '.';
import { Button } from '../buttons/Button';

const meta: Meta = {
  title: 'Atoms/Items',
  parameters: {
    docs: {
      description: {
        component: 'Composable list item primitives with support for media, content, actions, and separators.',
      },
    },
  },
};

export default meta;

const PlaceholderIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-4 text-muted-foreground">
    <rect x="2" y="2" width="12" height="12" rx="2" />
    <circle cx="8" cy="8" r="2" />
  </svg>
);

const Avatar = ({ initials }: { initials: string }) => (
  <div className="flex size-full items-center justify-center rounded-sm bg-muted text-xs font-medium text-muted-foreground">
    {initials}
  </div>
);

export const Variants: Story = () => (
  <div className="flex w-full max-w-sm flex-col gap-8">
    {(['default', 'outline', 'muted'] as const).map((variant) => (
      <div key={variant}>
        <p className="mb-2 text-xs font-medium text-muted-foreground capitalize">{variant}</p>
        <ItemGroup>
          <Item variant={variant}>
            <ItemContent>
              <ItemTitle>Item Title</ItemTitle>
              <ItemDescription>A brief description of this item.</ItemDescription>
            </ItemContent>
          </Item>
          <Item variant={variant}>
            <ItemContent>
              <ItemTitle>Another Item</ItemTitle>
              <ItemDescription>Supporting detail text goes here.</ItemDescription>
            </ItemContent>
          </Item>
        </ItemGroup>
      </div>
    ))}
  </div>
);

export const Sizes: Story = () => (
  <div className="flex w-full max-w-sm flex-col gap-8">
    {(['default', 'sm', 'xs'] as const).map((size) => (
      <div key={size}>
        <p className="mb-2 text-xs font-medium text-muted-foreground capitalize">{size}</p>
        <ItemGroup>
          <Item size={size}>
            <ItemMedia variant="icon">
              <PlaceholderIcon />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Item Title</ItemTitle>
              <ItemDescription>Description text.</ItemDescription>
            </ItemContent>
          </Item>
          <Item size={size}>
            <ItemMedia variant="icon">
              <PlaceholderIcon />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Another Item</ItemTitle>
              <ItemDescription>More detail here.</ItemDescription>
            </ItemContent>
          </Item>
        </ItemGroup>
      </div>
    ))}
  </div>
);

export const WithMedia: Story = () => (
  <div className="flex w-full max-w-sm flex-col gap-8">
    <div>
      <p className="mb-2 text-xs font-medium text-muted-foreground">Icon media</p>
      <ItemGroup>
        <Item variant="outline">
          <ItemMedia variant="icon">
            <PlaceholderIcon />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>With Icon</ItemTitle>
            <ItemDescription>Item with an icon in the media slot.</ItemDescription>
          </ItemContent>
        </Item>
      </ItemGroup>
    </div>
    <div>
      <p className="mb-2 text-xs font-medium text-muted-foreground">Image media</p>
      <ItemGroup>
        <Item variant="outline">
          <ItemMedia variant="image">
            <Avatar initials="AB" />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>With Avatar</ItemTitle>
            <ItemDescription>Item with an image/avatar in the media slot.</ItemDescription>
          </ItemContent>
        </Item>
      </ItemGroup>
    </div>
  </div>
);

export const WithActions: Story = () => (
  <div className="w-full max-w-sm">
    <ItemGroup>
      <Item variant="outline">
        <ItemContent>
          <ItemTitle>Item with Actions</ItemTitle>
          <ItemDescription>Actions appear inline at the end of the item.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="xs" variant="outline">Edit</Button>
          <Button size="xs" variant="destructive">Delete</Button>
        </ItemActions>
      </Item>
      <Item variant="outline">
        <ItemMedia variant="icon">
          <PlaceholderIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Icon + Actions</ItemTitle>
          <ItemDescription>Media and actions together.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="xs" variant="outline">View</Button>
        </ItemActions>
      </Item>
    </ItemGroup>
  </div>
);

export const WithSeparator: Story = () => (
  <div className="w-full max-w-sm">
    <ItemGroup>
      <Item>
        <ItemContent>
          <ItemTitle>First Group</ItemTitle>
          <ItemDescription>Items above the separator.</ItemDescription>
        </ItemContent>
      </Item>
      <Item>
        <ItemContent>
          <ItemTitle>Second Item</ItemTitle>
          <ItemDescription>Still in the first group.</ItemDescription>
        </ItemContent>
      </Item>
      <ItemSeparator />
      <Item>
        <ItemContent>
          <ItemTitle>Third Item</ItemTitle>
          <ItemDescription>Below the separator — a new group.</ItemDescription>
        </ItemContent>
      </Item>
    </ItemGroup>
  </div>
);

export const WithHeaderAndFooter: Story = () => (
  <div className="w-full max-w-sm">
    <ItemGroup>
      <Item variant="outline" className="flex-col items-start">
        <ItemHeader>
          <ItemTitle>Expandable Item</ItemTitle>
          <Button size="xs" variant="outline">Expand</Button>
        </ItemHeader>
        <ItemContent>
          <ItemDescription>
            This item uses ItemHeader to place a title and action on the same row spanning the full width.
          </ItemDescription>
        </ItemContent>
        <ItemFooter>
          <span className="text-xs text-muted-foreground">Updated 2 hours ago</span>
          <Button size="xs" variant="link">Details</Button>
        </ItemFooter>
      </Item>
    </ItemGroup>
  </div>
);
