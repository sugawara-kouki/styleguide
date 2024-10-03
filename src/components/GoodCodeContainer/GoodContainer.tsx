import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GOOD_LABEL } from '../../constants/commonConstants';
import * as styles from './styles';
import { PropsChildrenAndTailwindClass } from '../../types/common';

/**
 * GOODな例を表示するコンポーネント
 */
const GoodContainer = ({
  children,
  tailwindClass
}: PropsChildrenAndTailwindClass) => {
  return (
    <article className={`${styles.containerArticle} ${tailwindClass}`}>
      <p className={styles.containerTitle}>
        <FontAwesomeIcon
          icon={faLightbulb}
          size="lg"
          className={styles.containerLogo}
          aria-label="電球アイコン"
        />
        {GOOD_LABEL}
      </p>
      {children}
    </article>
  );
};

export default GoodContainer;
