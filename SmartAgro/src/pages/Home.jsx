import React from "react";
import Hero from "../components/Hero";
import Particles from "../components/Particles";
import Seasons from "./Seasons";
const Home = () => {
  return (
    <main>
    <div className="h-screen w-full relative bg-black flex justify-center items-center  ">
      <div style={{ width: "100%", height: "600px", position: "relative" }}>
        <Particles
          particleColors={["#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1} 
          particleBaseSize={80}
          moveParticlesOnHover
          alphaParticles={false}
          disableRotation={false}
          pixelRatio={1}
        />
      </div>
      <div className="absolute flex flex-col justify-center items-center text-white">
        <Hero />
      </div>
    </div>
    <Seasons />
    </main>
  );
};

export default Home;
