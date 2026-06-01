import React from 'react'
import KharifCropsCard from '../components/KharifCropsCard'

const Kharif = () => {
  return (
     <div className=' w-full bg-green-100 flex flex-col items-center py-30'>
    <h1 className='text-5xl font-bold text-center cursor-pointer text-green-800'>GUIDE TO KHARIF SEASON CROPS (SUMMER CROPS)</h1>
    <p className='text-lg text-gray-700 max-w-2xl text-center mt-6'>Sown in Summer ( June-Jul ) | Harvested in Autumn (Sep-Oct)</p>
    <KharifCropsCard />
   </div>
  )
}

export default Kharif