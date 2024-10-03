import type { Meta, StoryObj } from '@storybook/react';

import GoodContainer from './GoodContainer';

const meta = {
  title: 'Container/GoodContainer',
  component: GoodContainer
} satisfies Meta<typeof GoodContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const GoodCodeDefault: Story = {
  args: {
    children: 'ここにGOODな例を記述します。とてもGOODですね'
  }
};
