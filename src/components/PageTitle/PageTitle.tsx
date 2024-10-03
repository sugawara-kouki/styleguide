import { PropsOnlyChildren } from '../../types/common';
import * as styles from './styles';

/**
 * ページのタイトルコンポーネント
 */
const PageTitle = ({ children }: PropsOnlyChildren) => (
  <h1 className={styles.pageTitle}>{children}</h1>
);

export default PageTitle;
