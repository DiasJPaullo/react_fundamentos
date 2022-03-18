import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import Header from './components/Header';
import Produto from './pages/Produto';



const Rotas = () => {
  return(
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sobre' element={<Sobre />} />
        <Route path='/contato' element={<Contato />} />
        <Route path='/produto' element={<Produto />} />
        <Route path='/produto/:id' element={<Produto />} />
      </Routes>
    </Router>
  )
}

export default Rotas;


// erro de rota https://howtojs.io/how-to-solve-a-is-only-ever-to-be-used-as-the-child-of-element-never-rendered-directly-please-wrap-your-in-a-error-in-react-js/