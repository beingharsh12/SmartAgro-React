const Hero = () => {
  return (
    <section
      aria-labelledby="home-heading"
      className="text-center px-4"
    >
      <h1
        id="home-heading"
        className="text-4xl font-bold mt-20 bg-gradient-to-r from-green-200 to-green-500 bg-clip-text text-transparent"
      >
        Welcome to SmartAgro - Your Ultimate Farming Companion
      </h1>

      <p className="text-lg mt-4">
        Monitor, analyze, and improve your farm with data-driven solutions.
      </p>
    </section>
  );
};

export default Hero;
