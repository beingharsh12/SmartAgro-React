import React from "react";
import whychooseus from "../assets/whychooseus.avif";

const WhyChooseUs = () => {
  return (
    <section
      aria-labelledby="why-choose-us-heading"
      className="min-h-screen w-full bg-white flex items-center justify-evenly px-4 py-10 md:py-20 flex-col-reverse lg:flex-row"
    >
      {/* Image Section */}
      <div className="flex justify-center items-center lg:w-1/2">
        <img
          src={whychooseus}
          alt="Farmer using modern technology through SmartAgro platform"
          className=" h-[350px] max-w-md"
        />
      </div>

      {/* Content Section */}
      <div className="max-w-3xl space-y-6 lg:w-1/2">
        <h2
          id="why-choose-us-heading"
          className="text-3xl lg:text-4xl font-bold text-green-800"
        >
          Why Choose SmartAgro?
        </h2>

        <p className="text-gray-600 text-lg leading-relaxed">
          · Data-driven insights for better decisions,
          <br />
          · Easy-to-use platform for every farmer,
          <br />
          · Sustainable and eco-friendly solutions,
          <br />
          · Trusted by farmers across regions
        </p>
      </div>
    </section>
  );
};

export default WhyChooseUs;
