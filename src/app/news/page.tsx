import { NewsList } from '@/app/_components/NewsList';
import { Pagination } from '@/app/_components/Pagination';
import { SearchField } from '@/app/_components/SearchField';
import { NEWS_LIST_LIMIT as limit } from '@/app/_constants';
import { getNewsList } from '@/app/_libs/microcms';

const Page: React.FC = async () => {
  const { contents: news, totalCount } = await getNewsList({ limit });

  return (
    <>
      <SearchField />
      <NewsList news={news} />
      <Pagination totalCount={totalCount} />
    </>
  );
};

export default Page;
