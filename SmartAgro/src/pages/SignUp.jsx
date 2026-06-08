const SignUp = () => {
  return (
    <section className="w-full min-h-screen bg-green-100 flex items-center justify-center px-4 py-30" aria-labelledby="signup-heading">
      <form className="w-full max-w-md bg-white p-6 rounded-lg shadow-md" aria-describedby="signup-help">
        <h1 id="signup-heading" className="text-3xl font-bold text-green-800">
          Sign Up
        </h1>
        <p id="signup-help" className="mt-2 text-gray-600">
          Create a SmartAgro account.
        </p>

        <div className="mt-6">
          <label htmlFor="signup-name" className="block font-semibold text-gray-800">
            Full name
          </label>
          <input
            id="signup-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            className="mt-2 w-full rounded border border-gray-400 px-3 py-2 focus-visible:outline-green-700"
          />
        </div>

        <div className="mt-4">
          <label htmlFor="signup-email" className="block font-semibold text-gray-800">
            Email address
          </label>
          <input
            id="signup-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="mt-2 w-full rounded border border-gray-400 px-3 py-2 focus-visible:outline-green-700"
          />
        </div>

        <div className="mt-4">
          <label htmlFor="signup-password" className="block font-semibold text-gray-800">
            Password
          </label>
          <input
            id="signup-password"
            name="password"
            type="password"
            autoComplete="new-password"
            required
            minLength="8"
            aria-describedby="signup-password-help"
            className="mt-2 w-full rounded border border-gray-400 px-3 py-2 focus-visible:outline-green-700"
          />
          <p id="signup-password-help" className="mt-1 text-sm text-gray-600">
            Use at least 8 characters.
          </p>
        </div>

        <button type="submit" className="mt-6 w-full rounded bg-green-700 px-4 py-3 font-semibold text-white hover:bg-green-800">
          Create Account
        </button>
      </form>
    </section>
  );
};

export default SignUp;
