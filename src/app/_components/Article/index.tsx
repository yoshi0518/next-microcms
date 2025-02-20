import type { News } from '@/app/_libs/microcms';
import Image from 'next/image';
import styles from '@/app/_components/Article/index.module.css';
import { Category } from '@/app/_components/Category';
import { Date } from '@/app/_components/Date';

type Props = {
  data: News;
};

export const Article: React.FC<Props> = ({ data }: Props) => {
  return (
    <main>
      <h1 className={styles.title}>{data.title}</h1>
      <p className={styles.description}>{data.description}</p>
      <div className={styles.meta}>
        <Category category={data.category} />
        <Date date={data.publishedAt ?? data.createdAt} />
      </div>
      {data.thumbnail && (
        <Image
          src={data.thumbnail.url}
          alt=""
          className={styles.thumbnail}
          width={data.thumbnail.width}
          height={data.thumbnail.height}
        />
      )}
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{
          __html: data.content,
        }}
      />
    </main>
  );
};
