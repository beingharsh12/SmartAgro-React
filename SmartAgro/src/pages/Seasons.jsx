import Card from "../components/Card";

const Seasons = () => {
  return (
    <section aria-label="Seasons in India"
    className="min-h-screen w-full bg-green-100 flex flex-col items-center px-4 py-10">
      
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-green-800">
        Seasons in India
      </h1>

      <div className="flex flex-wrap justify-center items-center gap-6 py-10 w-full">
        <Card />
      </div>

    </section>
  );
};

export default Seasons;
