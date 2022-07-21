import styles from '../pages/styles/Header.module.css'
import Link from 'next/link'

const Header = () => (
  <div className={styles.header}>
    <nav>
      <Link href="/">
        <a className={styles.link_header}>Home</a>
      </Link>
      <Link href="/header/biblioteca">
        <a className={styles.link_header}>Biblioteca</a>
      </Link>
      <Link href="/header/contato">
        <a className={styles.link_header}>Contato</a>
      </Link>
      <Link href="/header/about">
        <a className={styles.link_header}>Sobre</a>
      </Link>
    </nav>
  </div>
)

export default Header
