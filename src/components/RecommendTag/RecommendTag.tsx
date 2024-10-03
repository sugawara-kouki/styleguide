import * as styles from './styles';
import { RECOMMEND_LABEL } from '../../constants/commonConstants';
import { PropsFontSizeAndTailwindClass } from '../../types/common';

/**
 * 推奨タグコンポーネント
 */
const RecommendTag = ({
  fontSize,
  tailwindClass
}: PropsFontSizeAndTailwindClass) => {
  return (
    <p className={`${styles.recommendTag} ${fontSize} ${tailwindClass}`}>
      {RECOMMEND_LABEL}
    </p>
  );
};

export default RecommendTag;
