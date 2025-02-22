'use client';

import { Suspense } from 'react';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import styles from '@/app/_components/SearchField/index.module.css';

export const SearchFieldComponent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const q = e.currentTarget.elements.namedItem('q') as HTMLInputElement;
    const params = new URLSearchParams();
    params.set('q', q.value.trim());
    router.push(`/news/search?${params.toString()}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={styles.form}
    >
      <label className={styles.search}>
        <Image
          src="/search.svg"
          alt="検索"
          width={16}
          height={16}
          loading="eager"
        />
        <input
          type="text"
          name="q"
          defaultValue={searchParams.get('q') ?? undefined}
          className={styles.searchInput}
          placeholder="キーワードを入力"
        />
      </label>
    </form>
  );
};

export const SearchField = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <SearchFieldComponent />
  </Suspense>
);
