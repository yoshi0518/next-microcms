import type { Metadata } from 'next';

import { Hero } from '../_components/Hero';
import { Sheet } from '../_components/Sheet';

export const metadata: Metadata = {
  title: 'お問い合わせ',
};

type Props = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: Props) => {
  return (
    <>
      <Hero
        title="Contact"
        sub="お問い合わせ"
      />
      <Sheet>{children}</Sheet>
    </>
  );
};

export default RootLayout;
