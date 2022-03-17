import { useState } from "react"

export default function Foumulario(){
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [idade, setIdade] = useState("")

  const [user, setUser] = useState({})
  function handleRegister(e){
    e.preventDefault()
    alert('Usuario Registrado')
    setUser({
      nome: nome,
      idade: idade,
      email: email
    })
    setNome("")
    setIdade("")
    setEmail("")
  }
  return(
    <div>
      <h1>Cadastro de usuario</h1>
      <form onSubmit={handleRegister} 
      style={{
        display:"flex",
        flexDirection: "column",
        gap: "20px",

      }}
      >
        <label>Nome</label>
        <input 
        placeholder="Digite seu nome" 
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        />

        <label>email</label>
        <input 
        placeholder="Digite seu email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />

        <label>Idade</label>
        <input placeholder="Digite sua idade"
        value={idade}
        onChange={(e) => setIdade(e.target.value)}
        />

        <button type="submit">Registrar</button>
      </form>
      <div 
      style={{
        display:"flex",
        flexDirection: "column",
        gap: "20px",
        marginTop:"50px" ,
        backgroundColor: "#2F4F4F" ,
        color: "#F0F8FF" ,
        height: "200px",
        padding: "10px"
      }}
      >
        <span>Bem vindo <span style={{color:"red"}}>{user.nome}</span> </span>
        <span>Idade:  <span style={{color:"red"}}>{user.idade}</span></span>
        <span>Email: <span style={{color:"red"}}>{user.email}</span></span>
      </div>
    </div>
  )
}

