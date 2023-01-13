
import { useState } from 'react';
import './App.css'
import Boton from './components/Boton'
import { Pantalla } from './components/Pantalla';

function App() {

const [valor, setValor] = useState(0);


const contarClick =() => {
  setValor(valor+1);
}
const reiniciarValor =() =>{
  setValor(0);

}

  return (
    <div className="App">
      <Pantalla numero={valor}/>
      <Boton texto='Click' funcion={contarClick} manejarTipoBtn={true}/>
      <Boton texto='Reiniciar' funcion={reiniciarValor} manejarTipoBtn={false}/>
    </div>
  )
}

export default App
