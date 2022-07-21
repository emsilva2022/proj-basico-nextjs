import styles from '../pages/styles/Side.module.css'
import Link from 'next/link'
import { 
    Chevron, 
    Dashboard,
    Next,
    Projetos,
    Informacoes,
    Logout,
    Todo,
    Analise,
    Set,
    Star
} from "./Icones"

const Side = () => (
  <div className={styles.sidebar}>
    <nav>
      <Link href="/side/dash">
        <a className={styles.link_side}>
        <button className={`
          flex justify-center items-center
          text-green-600 rounded-full p-2 m-1
          hover:bg-purple-50`}>{Dashboard}
        </button>Dashboard</a>
      </Link>
      <Link href="/side/projetos">
        <a className={styles.link_side}>
        <button className={`
          flex justify-center items-center
          text-green-600 rounded-full p-2 m-1
          hover:bg-purple-50`}>{Projetos}
        </button>Projetos
        <button className={`
          flex justify-center items-center
          text-green-600 rounded-full p-2 m-1
          hover:bg-purple-50`}>{Chevron}
        </button>
        </a>
      </Link>
      <Link href="/side/infor">
        <a className={styles.link_side}>
        <button className={`
          flex justify-center items-center
          text-green-600 rounded-full p-2 m-1
          hover:bg-purple-50`}>{Informacoes}
        </button>Informações</a>
      </Link>
      <Link href="/side/npm">
        <a className={styles.link_side}>
        <button className={`
          flex jus"tify-center items-center
          text-green-600 rounded-full p-2 m-1
          hove"r:bg-purple-50`}>{Star}
        </button>NPM</a>
      </Link>
      <Link href="/side/todo">
        <a className={styles.link_side}>
        <button className={`
          flex justify-center items-center
          text-green-600 rounded-full p-2 m-1
          hover:bg-purple-50`}>{Todo}
        </button>Todo</a>
      </Link>
      <Link href="/side/config">
        <a className={styles.link_side}>
        <button className={`
          flex justify-center items-center
          text-green-600 rounded-full p-2 m-1
          hover:bg-purple-50`}>{Set}
        </button>Configurações</a>
      </Link>
      <Link href="/side/logout">
        <a className={styles.link_side}>
        <button className={`
          flex justify-center items-center
          text-green-600 rounded-full p-2 m-1
          hover:bg-purple-50`}>{Logout}
        </button>Logout</a>
      </Link>
    </nav>
  </div>
)

export default Side