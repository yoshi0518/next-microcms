import { notFound } from 'next/navigation';
import { Category } from '@/app/_components/Category';
import { NewsList } from '@/app/_components/NewsList';
import { Pagination } from '@/app/_components/Pagination';
import { NEWS_LIST_LIMIT as limit } from '@/app/_constants';
import { getCategoryDetail, getNewsList } from '@/app/_libs/microcms';

type Props = {
  params: {
    id: string;
  };
};

const Page = async ({ params }: Props) => {
  const category = await getCategoryDetail(params.id).catch(notFound);

  const { contents: news, totalCount } = await getNewsList({
    limit,
    filters: `category[equals]${category.id}`,
  });

  return (
    <>
      <p>
        <Category category={category} />
        の一覧
      </p>
      <NewsList news={news} />
      <Pagination
        totalCount={totalCount}
        basePath={`/news/category/${category.id}`}
      />
    </>
  );
};

export default Page;
