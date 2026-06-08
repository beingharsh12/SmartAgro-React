import whychooseus from "../assets/whychooseus.avif";

const WhyChooseUs = () => {
  return (
    <section
      aria-labelledby="why-choose-us-heading"
      className="min-h-screen w-full bg-white flex items-center justify-evenly px-4 py-10 md:py-20 flex-col-reverse lg:flex-row"
    >
      <div className="flex justify-center items-center lg:w-1/2">
        <img
          src={whychooseus}
          alt="Farmer reviewing crop information on a digital device"
          className="h-[350px] max-w-md object-cover"
        />
      </div>

      <div className="max-w-3xl space-y-6 lg:w-1/2">
        <h2
          id="why-choose-us-heading"
          className="text-3xl lg:text-4xl font-bold text-green-800"
        >
          Why Choose SmartAgro?
        </h2>

        <ul className="text-gray-600 text-lg leading-relaxed list-disc pl-6 space-y-2">
          <li>Data-driven insights for better decisions</li>
          <li>Easy-to-use platform for every farmer</li>
          <li>Sustainable and eco-friendly solutions</li>
          <li>Trusted by farmers across regions</li>
        </ul>
      </div>
    </section>
  );
};

export default WhyChooseUs;
