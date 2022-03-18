import { useParams } from "react-router-dom";

export default function Produto(){
  const {id} = useParams();
  return(
    <>
      <h1>Grade de Produto</h1>
      <span>Produto selecionado: {id} </span>
    </>
  )
}