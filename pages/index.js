import NavEntry from '../components/NavEntry'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>

      </div>
      <div className={styles.sidebar}>
        <h2>nobbele's Website</h2>
        <nav className={styles.nav}>
          <NavEntry title="Home" href="/" />
        </nav>
      </div>
    </div>
  )
}
