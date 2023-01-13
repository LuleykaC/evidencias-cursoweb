import { useState } from 'react'
import { Encabezado } from './components/Encabezado'
import Formulario from './components/Formulario'
import { Listas } from './components/Listas'

 function App() {

  const [alumnos,setAlumnos] = useState([]);
  
  
  return (
    <div className="container mx-auto mt-14">
     <Encabezado/>
     <div className="mt-10 text-2xl flex">
        <Formulario
          setAlumnos={setAlumnos}
        />
        <Listas/>

      </div>

    </div>
   )
}

export default App
