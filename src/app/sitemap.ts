import { type MetadataRoute } from 'next';
import { getAllCategoryList, getAllNewsList } from '@/app/_libs/microcms';

const buildUrl = (path?: string) => `http://localhost:3000/${path ?? ''}`;

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const newsContents = await getAllNewsList();
  const categoryContents = await getAllCategoryList();

  const newsUrls: MetadataRoute.Sitemap = newsContents.map((content) => ({
    url: buildUrl(`/news/${content.id}`),
    lastModified: content.revisedAt,
  }));

  const categoryUrls: MetadataRoute.Sitemap = categoryContents.map((content) => ({
    url: buildUrl(`/category/${content.id}`),
    lastModified: content.revisedAt,
  }));

  const now = new Date();

  return [
    {
      url: buildUrl(),
      lastModified: now,
    },
    {
      url: buildUrl('/members'),
      lastModified: now,
    },
    {
      url: buildUrl('/contact'),
      lastModified: now,
    },
    {
      url: buildUrl('/news'),
      lastModified: now,
    },
    ...newsUrls,
    ...categoryUrls,
  ];
};

export default sitemap;
