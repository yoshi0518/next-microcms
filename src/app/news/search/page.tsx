import { NewsList } from '@/app/_components/NewsList';
import { SearchField } from '@/app/_components/SearchField';
import { NEWS_LIST_LIMIT as limit } from '@/app/_constants';
import { getNewsList } from '@/app/_libs/microcms';

type Props = {
  searchParams: {
    q?: string;
  };
};

const Page: React.FC<Props> = async ({ searchParams }: Props) => {
  const { contents: news } = await getNewsList({
    limit,
    q: searchParams.q,
  });

  return (
    <>
      <SearchField />
      <NewsList news={news} />
    </>
  );
};

export default Page;
