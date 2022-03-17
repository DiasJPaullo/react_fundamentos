import {BrowserRouter, Routes, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';



const Rotas = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sobre' element={<Sobre />} />
        <Route path='/contato' element={<Contato />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Rotas;


// erro de rota https://howtojs.io/how-to-solve-a-is-only-ever-to-be-used-as-the-child-of-element-never-rendered-directly-please-wrap-your-in-a-error-in-react-js/