import styles from '../../pages/styles/Default.module.css'

const DefaultLayout = ({ children }) => (
  <div className={styles.section}>
    <div className={styles.content}>
      {children}
    </div>
  </div>
)

export default DefaultLayout
