import Card from "../components/Card";

const CropGuide = () => {
  return (
    <section className="w-full min-h-screen bg-green-100 flex flex-col items-center px-4 py-30" aria-labelledby="crop-guide-heading">
      <h1 id="crop-guide-heading" className="text-4xl font-bold text-center text-green-800">
        Crop Guide
      </h1>
      <p className="mt-4 max-w-2xl text-center text-lg text-gray-700">
        Explore seasonal crop guides for Rabi, Kharif, and Zaid farming cycles.
      </p>
      <Card />
    </section>
  );
};

export default CropGuide;
