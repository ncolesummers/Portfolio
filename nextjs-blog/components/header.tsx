import Link from 'next/link';
import styles from './header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <ul className={styles.unorderedList}>
                <li className={styles.listItem}>
                    <Link href="/">
                        <a className={styles.listItemA}>Home</a>
                    </Link>
                </li>
                <li className={styles.listItem}>
                    <Link href="/about">
                        <a className={styles.listItemA}>About</a>
                    </Link>
                </li>
                <li className={styles.listItem}>
                    <Link href="https://presentation.ncolesummers.com">
                        <a className={styles.listItemA}>Presentation</a>
                    </Link>
                </li>
            </ul>
        </header>
    )
}
