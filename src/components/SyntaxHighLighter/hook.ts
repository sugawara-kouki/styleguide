import { useState } from 'react';
import {
  COPIED_LABEL,
  COPY_LABEL,
  COPY_LABEL_CHANGE_INTERVAL
} from '../../constants/commonConstants';

const useSyntaxHighLighter = (codeSnippet: string) => {
  // コピーボタンのラベルを押下有無で変更する
  const [copyButtonLabel, setCopyButtonLabel] = useState<string>(COPY_LABEL);

  const handleCopyClick = () => {
    // Copyボタンを押下すると3秒間だけCopied!という文字列に代わる
    navigator.clipboard.writeText(codeSnippet).then(() => {
      setCopyButtonLabel(COPIED_LABEL);
      setTimeout(() => {
        // 3秒後に元のラベルに戻す
        setCopyButtonLabel(COPY_LABEL);
      }, COPY_LABEL_CHANGE_INTERVAL);
    });
  };

  return { copyButtonLabel, handleCopyClick };
};
export default useSyntaxHighLighter;
