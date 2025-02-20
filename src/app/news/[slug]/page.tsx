import { notFound } from 'next/navigation';
import { Article } from '@/app/_components/Article';
import { ButtonLink } from '@/app/_components/ButtonLink';
import { getNewsDetail } from '@/app/_libs/microcms';
import styles from '@/app/news/[slug]/page.module.css';

type Props = {
  params: {
    slug: string;
  };
};

const Page: React.FC<Props> = async ({ params }: Props) => {
  const data = await getNewsDetail(params.slug).catch(notFound);

  return (
    <>
      <Article data={data} />
      <div className={styles.footer}>
        <ButtonLink href="/news">ニュース一覧へ</ButtonLink>
      </div>
    </>
  );
};

export default Page;
