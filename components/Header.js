import classNames from 'classnames';
import styles from './Header.module.css';

export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.headerSection}>
                <img src="/pfp.webp" className={styles.circleImage} />
                <p className={styles.text}>nobbele</p>
            </div>
            <div className={classNames(styles.headerSection, styles.headerLinks)}>
                <a className={styles.text} href="/">Home</a>
            </div>
            <div className={styles.headerSection}>
                <p className={styles.text}>social</p>
            </div>
        </div>
    )
}