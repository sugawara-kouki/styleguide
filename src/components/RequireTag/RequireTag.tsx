import { REQUIRED_LABEL } from '../../constants/commonConstants';
import { PropsFontSizeAndTailwindClass } from '../../types/common';
import * as styles from './styles';

/**
 * 必須タグコンポーネント
 */
const RequireTag = ({
  fontSize,
  tailwindClass
}: PropsFontSizeAndTailwindClass) => {
  return (
    <p
      className={`${styles.requireTag} ${fontSize} ${tailwindClass}`}
      aria-label="必須項目">
      {REQUIRED_LABEL}
    </p>
  );
};

export default RequireTag;
