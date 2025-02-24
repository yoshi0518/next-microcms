import type { Metadata } from 'next';
import { Hero } from '@/app/_components/Hero';
import { Sheet } from '@/app/_components/Sheet';

export const metadata: Metadata = {
  title: 'ニュース',
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Hero
        title="News"
        sub="ニュース"
      />
      <Sheet>{children}</Sheet>
    </>
  );
};

export default RootLayout;
