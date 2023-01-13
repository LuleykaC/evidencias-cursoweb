import React, {useState} from 'react'


export const formulario = ({setAlumnos}) => {

    const [nombre,setNombre] = useState('');
    const [correo,setCorreo] = useState('');
    const [grupo,setGrupo] = useState('');
    const [carrera,setCarrera] = useState('');
    const [fecha,setFecha] = useState('');
    const [observaciones,setObservaciones] = useState('');
    const [error,setError] = useState(false);

    const handleSubmit =(e) => {
        e.preventDefault();

        //Validacion de campos

        if([nombre,correo,grupo,carrera,fecha].includes('')){
            setError(true);
            return
        }
        setError(false)
        const objetoEstudiante ={
            nombre,
            correo,
            grupo,
            carrera,
            fecha,
            observaciones
        }
        setAlumnos(objetoEstudiante)
        limpiarCampos();
     }

     const limpiarCampos = () => {
        setNombre('');
        setCorreo('');
        setCarrera('');
        setGrupo('');
        setFecha('');
        setObservaciones('');
     }
  return (
    <div className='md:w-1/2 lg:w-2/5 bg-yellow-300'>
        <h2 className='font-black text-2xl mt-5 text-center'>Seguimiento de Estudiantes</h2>
        <p className='text-center mb-5'>Agrega estudiantes y <span className=' font-black text-blue-600'>administralos</span></p>
        <form 
            className='bg-white shadow-md rounded-md py-5 px-3'
            onSubmit={handleSubmit}
            >

            {
                error && (
                        <div className='bg-red-600 text-center text-white py-2'>
                            <p>Hay error en un campo</p>
                        </div>)
            }

            <div className='mb-5'>
                <label htmlFor='nombre' className='block uppercase'>Nombre del estudiante: </label>
                <input 
                    id='nombre'
                    type="text"
                    placeholder='Nombre del estudiante'
                    className='border-2 w-full p-2 placeholder-gray-400 rounded-md'
                    value={nombre}
                    onChange={(e)=>setNombre(e.target.value)}
                />
            </div>
            <div className='mb-5'>
                <label htmlFor='correo' className='block uppercase'>Correo electrónico: </label>
                <input 
                    id='correo'
                    type="text"
                    placeholder='Correo electrónico'
                    className='border-2 w-full p-2 placeholder-gray-400 rounded-md'
                    value={correo}
                    onChange={(e)=>setCorreo(e.target.value)}
                />
            </div>
            <div className='mb-5'>
                <label htmlFor='grupo' className='block uppercase'>Grupo: </label>
                <input 
                    id='grupo'
                    type="text"
                    placeholder='Grupo'
                    className='border-2 w-full p-2 placeholder-gray-400 rounded-md'
                    value={grupo}
                    onChange={(e)=>setGrupo(e.target.value)}
                />
            </div> 
            <div className='mb-5'>
                <label htmlFor='carrera' className='block uppercase'>Carrera: </label>
                <input 
                    id='carrera'
                    type="text"
                    placeholder='Carrera'
                    className='border-2 w-full p-2 placeholder-gray-400 rounded-md'
                    value={carrera}
                    onChange={(e)=>setCarrera(e.target.value)}
                />
            </div>
            <div className='mb-5'>
                <label htmlFor='fecha' className='block uppercase'>Fecha: </label>
                <input 
                    id='fecha'
                    type="date"
                    className='border-2 w-full p-2 placeholder-gray-400 rounded-md'
                    value={fecha}
                    onChange={(e)=>setFecha(e.target.value)}
                />
            </div>
            <div className='mb-5'>
                <label htmlFor='Observaciones' className='block uppercase'>Observaciones: </label>
                <textarea 
                    id='Observaciones'
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                    placeholder='Anota observación'
                    value={observaciones}
                    onChange={(e)=>setObservaciones(e.target.value)}
                />
            </div>
            <input
                type='submit'
                className='bg-indigo-700 w-full p-3 text-white font-bold hover:bg-indigo-900 cursor-pointer'
                value='Registrar información'
            />
        </form>
    </div>
  )
}

export default formulario