import styles from './Index.module.css'
import Header from "../components/Header"
import ContentWrapper from '../components/ContentWrapper'

export default function Index() {
  return (<>
    <Header />
    <ContentWrapper>
      <h1>Home Page</h1>
      <p>This is my website, written using Next.js(ReactJS)</p>
    </ContentWrapper>
  </>)
}
