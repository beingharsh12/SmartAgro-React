import React from 'react'
import rabiDetails from '../assets/rabiDetails.png'
import RabiCropsCard from '../components/RabiCropsCard'

const Rabi = () => {
  return (
   <div className='h-screen w-full bg-green-100 flex flex-col items-center py-30'>
    <h1 className='text-5xl font-bold text-center cursor-pointer text-green-800'>GUIDE TO RABI SEASON CROPS (WINTER CROPS)</h1>
    <p className='text-lg text-gray-700 max-w-2xl text-center mt-6'>Sown in Winter ( Oct-Dec ) | Harvested in Spring (Mar-Apr)</p>
    <RabiCropsCard />
   </div>
  )
}

export default Rabi