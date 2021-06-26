import styles from './ContentWrapper.module.css'

export default function ContentWrapper({ children }) {
    return (
        <main className={styles.content}>
            {children}
        </main>
    )
}