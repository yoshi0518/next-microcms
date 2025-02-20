import { Hero } from '@/app/_components/Hero';
import { Sheet } from '@/app/_components/Sheet';

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
