import { SupportLanguageOfSyntaxHighlight } from '../../types/common';

export type SyntaxHighLighterProps = {
  /** コードの記述言語設定 */
  language: SupportLanguageOfSyntaxHighlight;
  /** コードブロック内に表示させるコードテキスト */
  codeSnippet: string;
};
