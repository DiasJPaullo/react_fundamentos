import { useEffect, useState } from "react"

export default function Lista(){
  const [input, setInput] = useState("")
  const [tarefas, setTarefas] = useState([
    "Pagar a conta de luz",
    "Estudar React Js"
  ])

  useEffect(()=>{
    const tarefaStorage = localStorage.getItem('@tarefa')

    if(tarefaStorage){
      setTarefas(JSON.parse(tarefaStorage))
    }
  },[])

  useEffect(()=>{
    localStorage.setItem('@tarefa', JSON.stringify(tarefas))
  }, [tarefas])


  function handleRegister(e){
    e.preventDefault()
    setTarefas([...tarefas, input])
    setInput('')
  }
  return(
    <div>
      <h1>Lista de Tarefas</h1>
      <form onSubmit={handleRegister} 
      style={{
        display:"flex",
        flexDirection: "column",
        gap: "20px",

      }}
      >
        <label>Nome</label>
        <input 
        placeholder="Digite a Tarefa" 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        />

      <button type="submit">Registrar</button>
      </form>

      <ul 
      style={{
        display:"flex",
        flexDirection: "column",
        gap: "20px",
        marginTop:"50px" ,
        color: "#F0F8FF" ,
        height: "200px",
        padding: "10px"
      }}
      >
        {
         tarefas.map((tarefa, i) =>(
           <li key={i}><span style={{color:"red"}}>{tarefa}</span> </li>
         ))}
        
      </ul>
    </div>
  )
}

