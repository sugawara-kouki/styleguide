import { CodeBlockProps } from './type';
import * as styles from './styles';

/** インライン要素のコードブロックコンポーネント */
const CodeBlock = ({ codeSnippet, size = 'text-sm' }: CodeBlockProps) => {
  return <code className={`${size} ${styles.codeBlock}`}>{codeSnippet}</code>;
};

export default CodeBlock;
