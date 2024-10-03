import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as styles from './styles';
import { InfoContainerProps } from './types';

/**
 * 任意の情報を表示するコンポーネント
 */
const InfoContainer = ({ children, containerLabel }: InfoContainerProps) => {
  return (
    <article className={styles.containerArticle}>
      <p className={styles.containerTitle}>
        <FontAwesomeIcon
          icon={faInfoCircle}
          size="lg"
          className={styles.containerLogo}
          aria-label="INFOアイコン"
        />
        {containerLabel}
      </p>
      {children}
    </article>
  );
};

export default InfoContainer;
