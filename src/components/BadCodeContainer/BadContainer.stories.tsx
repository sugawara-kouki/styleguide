import type { Meta, StoryObj } from '@storybook/react';

import BadContainer from './BadContainer';

const meta = {
  title: 'Container/BadContainer',
  component: BadContainer,
  tags: ['autodocs']
} satisfies Meta<typeof BadContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BadCodeDefault: Story = {
  args: {
    children: 'ここにBADな例を記述します。とてもBADですね'
  }
};
