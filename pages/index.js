import { useAppContext } from '../components/appWrapper';
import NavEntry from '../components/NavEntry'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [sharedState, setSharedState] = useAppContext();

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <h2>nobbele's Website</h2>
        <nav className={styles.nav}>
          <NavEntry title="Home" href="/" />
        </nav>
      </div>
      <div className={styles.content}>
        <p>{sharedState.darkMode ? "YES" : "NO"}</p>
        <button onClick={() => setSharedState({ ...sharedState, darkMode: !sharedState.darkMode })}>Test</button>
      </div>
    </div>
  )
}
