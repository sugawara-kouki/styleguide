import { FontSize } from '../../types/common';

export type CodeBlockProps = {
  /** コードブロックに表示するコードテキスト */
  codeSnippet: string;
  /** tailwindcss形式のサイズ指定文字列  */
  size?: FontSize;
};
