'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/app/_components/Menu/index.module.css';
import cx from 'classnames';

export const Menu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <div>
      <nav className={cx(styles.nav, isOpen && styles.open)}>
        <ul className={styles.items}>
          <li>
            <Link href="/news">ニュース</Link>
          </li>
          <li>
            <Link href="/members">メンバー</Link>
          </li>
          <li>
            <Link href="/contact">お問い合わせ</Link>
          </li>
        </ul>
        <button
          className={cx(styles.button, styles.close)}
          onClick={toggle}
        >
          <Image
            src="close.svg"
            alt="閉じる"
            width={24}
            height={24}
            priority
          />
        </button>
      </nav>
      <button
        className={styles.button}
        onClick={toggle}
      >
        <Image
          src="menu.svg"
          alt="メニュー"
          width={24}
          height={24}
        />
      </button>
    </div>
  );
};
