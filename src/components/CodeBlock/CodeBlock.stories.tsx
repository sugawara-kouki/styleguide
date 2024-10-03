import type { Meta, StoryObj } from '@storybook/react';

import CodeBlock from './CodeBlock';

const meta = {
  title: 'Code/CodeBlock',
  component: CodeBlock,
  tags: ['autodocs']
} satisfies Meta<typeof CodeBlock>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CodeBlockDefault: Story = {
  args: {
    codeSnippet: 'default'
  }
};
