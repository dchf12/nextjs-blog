import styles from './layout.module.css';

export default function Layout({ children }: { children: React.ReactNode }): JSX.Element {
    return <div className={styles.container}>{children}</div>
}
