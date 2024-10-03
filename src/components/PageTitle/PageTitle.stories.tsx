import type { Meta, StoryObj } from '@storybook/react';

import PageTitle from './PageTitle';

const meta = {
  title: 'Title/PageTitle',
  component: PageTitle,
  tags: ['autodocs']
} satisfies Meta<typeof PageTitle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PageTitleDefault: Story = {
  args: {
    children: 'タイトル'
  }
};
