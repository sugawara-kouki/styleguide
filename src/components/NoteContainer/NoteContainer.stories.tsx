import type { Meta, StoryObj } from '@storybook/react';

import InfoContainer from './NoteContainer';

const meta = {
  title: 'Container/NoteContainer',
  component: InfoContainer
} satisfies Meta<typeof InfoContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const NoteDefault: Story = {
  args: {
    containerLabel: 'コンテナのタイトル',
    children:
      'ここにコードを記述することで、とてもきれいなNOTEを作成することができます'
  }
};
