import React from 'react'
import MissionCard from './MissionCard'

const OurMission = () => {
  return (
    <section className="bg-green-100 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-green-800">Our Mission & Vision</h2>
        </div>
        <div>
            <MissionCard />
        </div>
    </section>
  )
}

export default OurMission