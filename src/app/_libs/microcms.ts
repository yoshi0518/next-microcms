import type { MicroCMSImage, MicroCMSListContent, MicroCMSQueries } from 'microcms-js-sdk';
import { env } from '@/env';
import { createClient } from 'microcms-js-sdk';

export type Member = {
  name: string;
  position: string;
  profile: string;
  image: MicroCMSImage;
} & MicroCMSListContent;

export type Category = {
  name: string;
} & MicroCMSListContent;

export type News = {
  title: string;
  description: string;
  content: string;
  thumbnail?: MicroCMSImage;
  category: Category;
} & MicroCMSListContent;

// export type News = {
//   id: string;
//   title: string;
//   category: {
//     name: string;
//   };
//   publishedAt: string;
//   createdAt: string;
// };

// export type Category = {
//   name: string;
// };

if (!env.MICROCMS_SERVICE_DOMAIN) throw new Error('MICROCMS_SERVICE_DOMAIN is required');
if (!env.MICROCMS_API_KEY) throw new Error('MICROCMS_API_KEY is required');

const client = createClient({
  serviceDomain: env.MICROCMS_SERVICE_DOMAIN,
  apiKey: env.MICROCMS_API_KEY,
});

export const getMemberList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<Member>({
    endpoint: 'members',
    queries,
  });

  return listData;
};

export const getNewsList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<News>({
    endpoint: 'news',
    queries,
  });

  return listData;
};

export const getAllNewsList = async () => {
  const listData = await client.getAllContents<News>({
    endpoint: 'news',
  });

  return listData;
};

export const getNewsDetail = async (contentId: string, queries?: MicroCMSQueries) => {
  const detailData = await client.getListDetail<News>({
    endpoint: 'news',
    contentId,
    queries,
  });

  return detailData;
};

export const getAllCategoryList = async () => {
  const listData = await client.getAllContents<Category>({
    endpoint: 'categories',
  });

  return listData;
};

export const getCategoryDetail = async (contentId: string, queries?: MicroCMSQueries) => {
  const detailData = await client.getListDetail<Category>({
    endpoint: 'categories',
    contentId,
    queries,
  });

  return detailData;
};
