import styles from './NavEntry.module.css'
import Link from 'next/link'

export default function NavEntry({ title, href }) {
    return (
        <div className={styles.navEntry}>
            <Link href={href}>{title}</Link>
        </div>
    );
}