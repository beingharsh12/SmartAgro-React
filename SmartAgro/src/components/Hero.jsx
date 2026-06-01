import React from 'react'

const Hero = () => {
  return (
    <section aria-labelledby="home-heading" className="text-center px-4">
      <h1 id="home-heading" className="text-4xl font-bold text-center mt-20 cursor-pointer bg-gradient-to-r from-green-200 to-green-500 bg-clip-text text-transparent">Welcome to SmartAgro - Your Ultimate Farming Companion</h1>
      <p className="text-lg text-center mt-4 cursor-pointer">Monitor, analyze, and improve your farm with data-driven solutions.</p>
    </section>
  )
}

export default Hero