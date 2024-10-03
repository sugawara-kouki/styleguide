import type { Meta, StoryObj } from '@storybook/react';

import DetailContainer from './DetailContainer';
import CodeBlock from '../CodeBlock/CodeBlock';
import SyntaxHighLightCodeBlock from '../SyntaxHighLighter/SyntaxHighLighter';
import { LANGUAGE_CONSTANTS } from '../../constants/languageConstants';

const meta = {
  title: 'Contaier/DetailContainer',
  component: DetailContainer
} satisfies Meta<typeof DetailContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CodeBlockDefault: Story = {
  args: {
    detailTitle: '詳細',
    children: <p>これが詳細です</p>
  }
};

export const CodeBlockSyntaxContainer: Story = {
  args: {
    detailTitle: 'プログラムも書けます',
    children: (
      <SyntaxHighLightCodeBlock
        language={LANGUAGE_CONSTANTS.TYPESCRIPT}
        codeSnippet='console.log("Hello World");'
      />
    )
  }
};
