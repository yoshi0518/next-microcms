import Image from 'next/image';
import styles from '@/app/_components/Date/index.module.css';
import { formatDate } from '@/app/_libs/utils';

type Props = {
  date: string;
};

export const Date = ({ date }: Props) => {
  return (
    <span className={styles.date}>
      <Image
        src="/clock.svg"
        alt=""
        width={16}
        height={16}
        loading="eager"
      />
      {formatDate(date)}
    </span>
  );
};
