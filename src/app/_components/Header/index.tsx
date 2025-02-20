import Image from 'next/image';
import Link from 'next/link';
import styles from '@/app/_components/Header/index.module.css';
import { Menu } from '@/app/_components/Menu';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link
        href="/"
        className={styles.logoLink}
      >
        <Image
          src="/logo.svg"
          alt="sample"
          className={styles.logo}
          width={348}
          height={133}
          priority
        />
      </Link>
      <Menu />
    </header>
  );
};
