import { Hero } from '../_components/Hero';
import { Sheet } from '../_components/Sheet';

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
