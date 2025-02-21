import { notFound } from 'next/navigation';
import { NewsList } from '@/app/_components/NewsList';
import { Pagination } from '@/app/_components/Pagination';
import { NEWS_LIST_LIMIT } from '@/app/_constants';
import { getCategoryDetail, getNewsList } from '@/app/_libs/microcms';

type Props = {
  params: {
    current: string;
    id: string;
  };
};

const Page: React.FC<Props> = async ({ params }) => {
  const current = parseInt(params.current, 10);
  if (Number.isNaN(current) || current < 1) notFound();

  const category = await getCategoryDetail(params.id).catch(() => notFound());

  const { contents: news, totalCount } = await getNewsList({
    filters: `category[equals]${category.id}`,
    limit: NEWS_LIST_LIMIT,
    offset: NEWS_LIST_LIMIT * (current - 1),
  });

  if (news.length === 0) notFound();

  return (
    <>
      <NewsList news={news} />
      <Pagination
        totalCount={totalCount}
        current={current}
        basePath={`/news/category/${category.id}`}
      />
    </>
  );
};

export default Page;
