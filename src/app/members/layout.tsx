import type { Metadata } from 'next';
import { Hero } from '@/app/_components/Hero';
import { Sheet } from '@/app/_components/Sheet';

export const metadata: Metadata = {
  title: 'メンバー',
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Hero
        title="Members"
        sub="メンバー"
      />
      <Sheet>{children}</Sheet>
    </>
  );
};

export default RootLayout;
