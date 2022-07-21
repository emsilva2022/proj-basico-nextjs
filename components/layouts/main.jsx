import styles from '../../pages/styles/Main.module.css'
import Header from '../header'
import Side from '../side'

const MainLayout = ({ children }) => (
  <div className={styles.main_container}>
    <Header />
    <Side />

    <div className={styles.content_wrapper}>
      {children}
    </div>

  </div>
)

export default MainLayout
