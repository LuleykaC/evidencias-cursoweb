import { personajes } from "./data/data"

export const ImprimePersonajes = () => {
    console.log(personajes)
  return (
    <div>
        <h1>Mis personajes</h1>
        <ol>
            {
            personajes.map((personaje,key) => {
            return <li key={key}>{`PERSONAJE: ${personaje.nombre} SUPERPODER: ${personaje.superpoder}`}</li>
       
    })
      
                }
            
        </ol>
    </div>
  )
}
