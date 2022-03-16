import { useState } from 'react';
import Nome from './components/Nome'
var active

function App() {
  const [aluno, setAluno] = useState('Fulano de Tal')

  function handleChangeName(){
    active = !active
    active ? setAluno('João Paullo'): setAluno('Fulano de Tal')
    // if (active){
    //   setAluno('João Paullo')
    // }else{
    //   setAluno('Fulano de Tal')
    // }
  }

  return (
    <div className="App">
      <h1>Primeiro Projeto React</h1>
    
      <Nome nome={aluno}/>
      <div>
        <button onClick={handleChangeName}>
          Mudar Nome
        </button>

      </div>
    </div>
  )
}

export default App;



