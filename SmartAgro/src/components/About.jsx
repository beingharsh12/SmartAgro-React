import React from "react";
import aboutImage from "../assets/about.avif";

const About = () => {
  return (
    <section
      aria-labelledby="about-heading"
      className="min-h-screen w-full bg-white flex items-center justify-evenly px-4 py-10 md:py-20 flex-col-reverse lg:flex-row"
    >
      {/* Image Section */}
      <div className="flex justify-center items-center lg:w-1/2">
        <img
          src={aboutImage}
          alt="Farmer using modern technology through SmartAgro platform"
          className="w-full max-w-md"
        />
      </div>

      {/* Content Section */}
      <div className="max-w-3xl space-y-6 lg:w-1/2">
        <h2
          id="about-heading"
          className="text-3xl lg:text-4xl font-bold text-green-800"
        >
          About SmartAgro
        </h2>

        <p className="text-gray-600 text-lg leading-relaxed">
          With SmartAgro, we aim to build a bridge between traditional farming
          practices and modern technology. From weather updates and crop guides
          to purchase solutions and expert support, we bring everything together
          on one platform for a smarter farming future.
        </p>
      </div>
    </section>
  );
};

export default About;