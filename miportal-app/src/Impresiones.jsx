export const Impresiones = () => {
    const estudiantes=['Brenda','Jose','Perla','Karina','Jorge','Saul']
  return (
    <div>
        <h1>Mis Estudiantes</h1>
        <ol>
            {
                estudiantes.map((estudiante,key) => {
                    return <li key={key}>{estudiante}</li>
                })
                }
            
        </ol>
    </div>
  )
}
