import classNames from 'classnames';
import styles from './Header.module.css';

export default function Header() {
    return (
        <div className={styles.header}>
            <div className={classNames(styles.headerSection, styles.headerName)}>
                <img src="/pfp.webp" className={styles.circleImage} />
                <span className={classNames(styles.text, styles.name)}>nobbele</span>
            </div>
            <div className={classNames(styles.headerSection, styles.headerLinks)}>
                <a className={styles.text} href="/">Home</a>
            </div>
            <div className={styles.headerSection}>
                <span className={styles.text}>social</span>
            </div>
        </div>
    )
}