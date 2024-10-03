import * as styles from './styles';
import { PropsOnlyChildren } from '../../types/common';

/**
 * 各セクションのタイトルコンポーネント
 */
const SectionTitle = ({ children }: PropsOnlyChildren) => (
  <h2 className={styles.sectionTitle}>{children}</h2>
);

export default SectionTitle;
