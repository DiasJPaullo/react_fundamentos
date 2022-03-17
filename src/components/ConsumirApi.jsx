import { useEffect, useState } from "react"
import styles from '../styles/ConsumirApi.module.scss'

export default function ConsumirApi() {

  const [nutri, setNutri] = useState([])
  useEffect(() => {
    function loadApi() {
      let url = 'https://sujeitoprogramador.com/rn-api/?api=posts'
      fetch(url)
        .then((res) => res.json())
        .then((json) => {
          setNutri(json)
        })
    }
    loadApi()
  }, [])

  return (


    <div className={styles.container}>
      <header>
        <strong>React Nutri</strong>
      </header>
      {nutri.map((item) =>{
        return(
         
            <article key={item.id} className= {styles.post}>
              <strong className= {styles.titulo}>{item.titulo}</strong>
              <img src={item.capa} alt={item.titulo} className="capa" />
              <p className={styles.subtitulo}>{item.subtitulo}</p>
              <h1>Categoria: {item.categoria}</h1>
              <a className={styles.botao}>Acessar</a>
            </article>
     
        )
      })}
    </div>

  )
}