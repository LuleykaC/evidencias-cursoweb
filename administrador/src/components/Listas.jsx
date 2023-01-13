import React from 'react'
import { Cita } from './Cita'

export const Listas = () => {
  return (
    <div className='md:w-1/2 lg:w-3/5 bg-red-300 md:h-screen overflow-y-scroll'>
    <h2 className='font-black text-2xl mt-5 text-center'>Lista de estudiantes</h2>
    <p className='text-center mb-5'>Citas agendadas <span className=' font-black text-blue-600'> </span></p>

    <div className='m-5 shadow-sm bg-yellow-50 shadow-sm py-5 px-5 rounded-md'>
        <Cita/>
        <Cita/>
        <Cita/>
        <Cita/>
        <Cita/>
        <Cita/>
        <Cita/>
        <Cita/>
        <Cita/>
        <Cita/>
    </div>
    
</div>  )
}
