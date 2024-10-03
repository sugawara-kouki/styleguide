import type { Meta, StoryObj } from '@storybook/react';

import RecommendTag from './RecommendTag';

const meta = {
  title: 'Tag/RecommendTag',
  component: RecommendTag,
  tags: ['autodocs']
} satisfies Meta<typeof RecommendTag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const RecommendTagDefault: Story = {};

export const RecommendTagLarge: Story = {
  args: {
    fontSize: 'text-9xl'
  }
};

export const RecommendTagSmall: Story = {
  args: {
    fontSize: 'text-xs'
  }
};
