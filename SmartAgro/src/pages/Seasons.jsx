import React from 'react'
import Card from '../components/Card'

const Seasons = () => {
  return (
    <div className="h-screen w-full bg-green-100 flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold text-center cursor-pointer text-green-800">Seasons in India</h1>
        <div className='flex flex-wrap justify-center items-center py-10'>
            <Card />
        </div>
    </div>

  )
}

export default Seasons