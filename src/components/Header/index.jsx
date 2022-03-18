import { Link } from "react-router-dom"
import styles from '../../styles/header.module.scss'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <section className= {styles.conteudo}>
          <h2>Header da Pagina</h2>
          <div className={styles.menu}>
            <Link to="/">Home</Link>
            <Link to="/sobre">Sobre</Link>
            <Link to="/contato">Contatos</Link>
            <Link to="/produto">Produtos</Link>
          </div>
        </section>

      </div>

    </header>
  )
}