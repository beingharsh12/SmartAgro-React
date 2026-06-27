import React from 'react';
import { Link } from 'react-router-dom';
import Particles from '../components/Particles';
import './Login.css'
const Login = () => {
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

    <section className="absolute flex flex-col  text-white w-full min-h-screen flex items-center justify-center px-4 py-30" aria-labelledby="login-heading">
      <form className="w-full max-w-md p-7 rounded-lg shadow-md loginForm" aria-describedby="login-help">
        <h1 id="login-heading" className="text-3xl font-bold">
          Login
        </h1>
        <p id="login-help" className="mt-2 text-gray-400">
          Access your SmartAgro account.
        </p>

        <div className="mt-6">
          <label htmlFor="login-email" className="block font-semibold">
            Email address
          </label>
          <input
            id="login-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder='Enter email'
            required
            className="mt-2 w-full rounded border border-gray-400 px-3 py-2 focus-visible:outline-green-700"
          />
        </div>

        <div className="mt-4">
          <label htmlFor="login-password" className="block font-semibold">
            Password
          </label>
          <input
            id="login-password"
            name="password"
            type="password"
            autoComplete="current-password"
            placeholder='Enter password'
            required
            className="mt-2 w-full rounded border border-gray-400 px-3 py-2 focus-visible:outline-green-700"
          />
        </div>
        <p>Don't have an account? <Link to="/signup" className="text-green-700 hover:underline">Sign up</Link></p>
        <button type="submit" className="mt-6 w-full rounded bg-green-700 px-4 py-3 font-semibold text-white hover:bg-green-800">
          Login
        </button>
      </form>
    </section>
    </>
  );
};

export default Login;
