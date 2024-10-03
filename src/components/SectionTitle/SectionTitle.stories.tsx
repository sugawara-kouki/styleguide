import type { Meta, StoryObj } from '@storybook/react';

import SectionTitle from './SectionTitle';

const meta = {
  title: 'Title/SectionTitle',
  component: SectionTitle
} satisfies Meta<typeof SectionTitle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SectionTitleDefault: Story = {
  args: {
    children: 'セクションのタイトル'
  }
};
