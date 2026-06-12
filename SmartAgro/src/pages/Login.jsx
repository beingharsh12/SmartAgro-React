import React from 'react';
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <section className="w-full min-h-screen bg-green-100 flex items-center justify-center px-4 py-30" aria-labelledby="login-heading">
      <form className="w-full max-w-md bg-white p-6 rounded-lg shadow-md" aria-describedby="login-help">
        <h1 id="login-heading" className="text-3xl font-bold text-green-800">
          Login
        </h1>
        <p id="login-help" className="mt-2 text-gray-600">
          Access your SmartAgro account.
        </p>

        <div className="mt-6">
          <label htmlFor="login-email" className="block font-semibold text-gray-800">
            Email address
          </label>
          <input
            id="login-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="mt-2 w-full rounded border border-gray-400 px-3 py-2 focus-visible:outline-green-700"
          />
        </div>

        <div className="mt-4">
          <label htmlFor="login-password" className="block font-semibold text-gray-800">
            Password
          </label>
          <input
            id="login-password"
            name="password"
            type="password"
            autoComplete="current-password"
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
  );
};

export default Login;
