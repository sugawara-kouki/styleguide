import * as styles from './styles';
import { DetailContainerProps } from './types';

/**
 * 詳細を表示するコンポーネント
 */
const DetailContainer = ({
  detailTitle,
  customClass,
  children
}: DetailContainerProps) => {
  return (
    <article className={`${styles.containerArticle} ${customClass}`}>
      <p className={`${styles.containerTitle}`}>{detailTitle}</p>
      {children}
    </article>
  );
};
export default DetailContainer;
