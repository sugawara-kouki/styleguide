import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import useSyntaxHighLighter from './hook';
import * as styles from './styles';
import { SyntaxHighLighterProps } from './types';

/**
 * シンタックスハイライト付きのコードブロックコンポーネント
 */
const SyntaxHighLightCodeBlock = ({
  language,
  codeSnippet
}: SyntaxHighLighterProps) => {
  // カスタムフックからコピーボタン押下イベントと表示ラベルを取得
  const { copyButtonLabel, handleCopyClick } =
    useSyntaxHighLighter(codeSnippet);
  return (
    <div className={styles.codeContainer}>
      {/* コードブロック部分 */}
      <SyntaxHighlighter
        language={language}
        style={github}
        customStyle={styles.customStyles}>
        {codeSnippet}
      </SyntaxHighlighter>

      {/* コピーボタン部分 */}
      <button
        onClick={handleCopyClick}
        className={styles.copyButton}>
        {copyButtonLabel}
      </button>
    </div>
  );
};

export default SyntaxHighLightCodeBlock;
