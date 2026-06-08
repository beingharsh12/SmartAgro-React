import ZaidCropsCard from "../components/ZaidCropsCard";

const Zaid = () => {
  return (
    <section className="w-full bg-green-100 flex flex-col items-center py-30 px-4" aria-labelledby="zaid-heading">
      <h1 id="zaid-heading" className="text-5xl font-bold text-center text-green-800">
        Guide to Zaid Season Crops (Spring Crops)
      </h1>
      <p className="text-lg text-gray-700 max-w-2xl text-center mt-6">
        Sown in Spring ( Mar-Apr ) | Harvested in Summer (June-Jul)
      </p>
      <ZaidCropsCard />
    </section>
  );
};

export default Zaid;
