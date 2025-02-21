import Link from 'next/link';
import styles from '@/app/_components/Pagination/index.module.css';
import { NEWS_LIST_LIMIT } from '@/app/_constants';

type Props = {
  totalCount: number;
  current?: number;
  basePath?: string;
};

export const Pagination: React.FC<Props> = ({ totalCount, current = 1, basePath = '/news' }) => {
  const pages = Array.from({ length: Math.ceil(totalCount / NEWS_LIST_LIMIT) }, (_, i) => i + 1);

  return (
    <nav>
      <ul className={styles.container}>
        {pages.map((p) => (
          <li
            className={styles.list}
            key={p}
          >
            {current !== p ? (
              <Link
                href={`${basePath}/p/${p}`}
                className={styles.item}
              >
                {p}
              </Link>
            ) : (
              <span className={`${styles.item} ${styles.current}`}>{p}</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};
