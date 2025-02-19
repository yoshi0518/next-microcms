import type { Category as CategoryType } from '@/app/_libs/microcms';
import styles from '@/app/_components/Category/index.module.css';

type Props = {
  category: CategoryType;
};

export const Category = ({ category }: Props) => {
  return <span className={styles.tag}>{category.name}</span>;
};
