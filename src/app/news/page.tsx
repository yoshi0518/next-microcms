import { NewsList } from '@/app/_components/NewsList';
import { getNewsList } from '@/app/_libs/microcms';

const Page: React.FC = async () => {
  const { contents: news } = await getNewsList();

  return <NewsList news={news} />;
};

export default Page;
