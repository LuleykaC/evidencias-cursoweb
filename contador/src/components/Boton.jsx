import '../styles/Boton.css';
import '../styles/Pantalla.css';


export const Boton = ({texto,funcion,manejarTipoBtn}) => {
  return (
    <div className={`${manejarTipoBtn ? 'boton': 'boton-limpiar'}`}
        onClick={funcion}

    >{texto}</div>
  )
}

export default Boton

