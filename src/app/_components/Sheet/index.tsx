import styles from '@/app/_components/Sheet/index.module.css';

export const Sheet: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
