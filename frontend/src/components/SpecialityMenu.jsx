import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
  return (
    <div className='bg-gradient-to-b from-blue-100 to-slate-200 gap-2 py-10 pb-0 text-gray-800' id='speciality'>
        <h1 className=' text-center text-3xl font-medium text-lime-950'>Find by Speciality</h1>
        <div className='flex items-center gap-4 sm:justify-center pt-5 w-full overflow-scroll'>
            {specialityData.map((item, index)=>(
                <Link onClick={()=>scrollTo(0,0)} className='flex flex-col items-center text-xs px-1 py-3 bg-slate-300 border-solid border border-gray-500 rounded-md cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500' key={index} to={`/doctors/${item.speciality}`}>
                    <img className='w-16 sm:w-24 mb-2' src={item.image} alt="" />
                    <p>{item.speciality}</p>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default SpecialityMenu