import classNames from 'classnames';
import styles from './Header.module.css';
import Link from 'next/link';

export default function Header() {
    return (
        <div className={styles.header}>
            <div className={classNames(styles.headerSection, styles.headerName)}>
                <img src="/pfp.webp" className={styles.circleImage} />
                <span className={classNames(styles.text, styles.name)}>nobbele</span>
            </div>
            <nav className={classNames(styles.headerSection, styles.headerLinks)}>
                <HeaderLink className={styles.text} href="/">Home</HeaderLink>
                <HeaderLink className={styles.text} href="/projects">Projects</HeaderLink>
            </nav>
            <div className={classNames(styles.headerSection, styles.socials)}>
                <a href="https://github.com/nobbele" target="_blank">
                    <figure>
                        <img src="/gh64.png" className={classNames(styles.circleImage, styles.socialImage)} />
                        <figcaption>GitHub</figcaption>
                    </figure>
                </a>
            </div>
        </div>
    )
}

function HeaderLink({ href, className, children }) {
    return (
        <Link href={href}>
            <div className={styles.linkContainer}>
                <span className={className}>{children}</span>
            </div>
        </Link>
    )
}