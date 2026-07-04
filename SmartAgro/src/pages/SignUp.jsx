import React from 'react';
import { Link } from 'react-router-dom';
import Particles from '../components/Particles';
import './Login.css'
const SignUp = () => {
  return (
    <>
    <section className="min-h-screen w-full relative bg-black flex justify-center items-center">
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
    </section>
    <section className="absolute text-white w-full min-h-screen px-4 py-30 w-full min-h-screen flex items-center justify-center py-30" aria-labelledby="signup-heading">
      <form className="w-full max-w-md p-6 rounded-lg shadow-md loginForm" aria-describedby="signup-help">
        <h1 id="signup-heading" className="text-3xl font-bold">
          Sign Up
        </h1>
        <p id="signup-help" className="mt-2 text-gray-400">
          Create a SmartAgro account.
        </p>

        <div className="mt-6">
          <label htmlFor="signup-name" className="block font-semibold">
            Full name
          </label>
          <input
            id="signup-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder='Enter name'
            required
            className="mt-2 w-full rounded border border-gray-400 px-3 py-2 focus-visible:outline-green-700"
          />
        </div>

        <div className="mt-4">
          <label htmlFor="signup-email" className="block font-semibold">
            Email address
          </label>
          <input
            id="signup-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder='Enter email'
            required
            className="mt-2 w-full rounded border border-gray-400 px-3 py-2 focus-visible:outline-green-700"
          />
        </div>

        <div className="mt-4">
          <label htmlFor="signup-password" className="block font-semibold">
            Password
          </label>
          <input
          
            id="signup-password"
            name="password"
            type="password"
            autoComplete="new-password"
            required
            placeholder='Enter Password'
            minLength="8"
            aria-describedby="signup-password-help"
            className="mt-2 w-full rounded border border-gray-400 px-3 py-2 focus-visible:outline-green-700"
          />
          <p id="signup-password-help" className="mt-1 text-sm text-gray-400">
            Use at least 8 characters.
          </p>
        </div>
        <p>Already have an account? <Link to="/login" className="text-green-700 hover:underline">Log in</Link></p>

        <button type="submit" className="mt-6 w-full rounded bg-green-700 px-4 py-3 font-semibold text-white hover:bg-green-800">
          Create Account
        </button>
      </form>
    </section>
    </>
  );
};

export default SignUp;
