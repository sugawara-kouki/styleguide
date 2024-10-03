import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BAD_LABEL } from '../../constants/commonConstants';
import * as styles from './styles';
import { PropsChildrenAndTailwindClass } from '../../types/common';

/**
 * BADな例を表示するコンポーネント
 */
const BadContainer = ({
  children,
  tailwindClass
}: PropsChildrenAndTailwindClass) => {
  return (
    <article className={`${styles.containerArticle} ${tailwindClass}`}>
      <p className={styles.containerTitle}>
        <FontAwesomeIcon
          icon={faExclamationTriangle}
          size="lg"
          className="mr-1"
          aria-label="警告アイコン"
        />
        {BAD_LABEL}
      </p>
      {children}
    </article>
  );
};

export default BadContainer;
