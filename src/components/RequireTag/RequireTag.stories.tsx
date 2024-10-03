import type { Meta, StoryObj } from '@storybook/react';

import RequireTag from './RequireTag';

const meta = {
  title: 'Tag/RequireTag',
  component: RequireTag
} satisfies Meta<typeof RequireTag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const RequireTagDefault: Story = {};

export const RequireTagLarge: Story = {
  args: {
    fontSize: 'text-9xl'
  }
};

export const RequireTagSmall: Story = {
  args: {
    fontSize: 'text-xs'
  }
};
