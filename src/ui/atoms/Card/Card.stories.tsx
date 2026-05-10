import {Card, CardHeader, CardTitle, CardContent, CardDescription , CardFooter} from '.';
import { Button } from '../Buttons/Button';
import type { Story, Meta } from '@ladle/react';

const meta: Meta = {
  title: 'D Atoms/C Card',
  parameters: {
    docs: {
      description: {
        component:
          'A versatile card component with multiple slots for header, content, and actions, built using shadcn/ui and CSS custom properties.',
      },
    },
  },
};

export default meta;

export const Cards: Story = () => (
  <div className="flex flex-col gap-4">
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>This is a description of the card.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Here is some content inside the card. It can be text, images, or any other elements.</p>
      </CardContent>
      <CardFooter>
        <Button variant="outline">Action 1</Button>
        <Button variant="outline" className="ml-4">
          Action 2
        </Button>
      </CardFooter>
    </Card>
  </div>
);