const forecast = [
  {
    day: "Today",
    condition: "Partly Cloudy",
    temperature: "31 C",
    rainfall: "20% chance",
    advice: "Irrigate only if the top soil is dry.",
  },
  {
    day: "Tomorrow",
    condition: "Light Rain",
    temperature: "29 C",
    rainfall: "55% chance",
    advice: "Delay pesticide spraying until leaves are dry.",
  },
  {
    day: "Day 3",
    condition: "Sunny",
    temperature: "33 C",
    rainfall: "10% chance",
    advice: "Plan field work early morning to avoid heat stress.",
  },
];

const advisories = [
  {
    title: "Irrigation",
    detail: "Water crops in the morning or evening to reduce evaporation and protect young plants.",
  },
  {
    title: "Spraying",
    detail: "Avoid spraying during strong wind, rain, or peak afternoon heat.",
  },
  {
    title: "Harvesting",
    detail: "Prefer dry weather windows for harvesting and storage to reduce grain moisture issues.",
  },
  {
    title: "Soil Care",
    detail: "Use mulch where possible to retain moisture during hot and dry spells.",
  },
];

const Weather = () => {
  return (
    <section className="w-full min-h-screen bg-green-100 px-4 py-30" aria-labelledby="weather-heading">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="font-semibold uppercase tracking-wide text-green-700">Farm Weather</p>
          <h1 id="weather-heading" className="mt-3 text-4xl font-bold text-green-800">
            Weather Insights for Farming
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-700">
            Use weather conditions to plan irrigation, spraying, sowing, harvesting, and daily field work.
          </p>
        </div>

        <section className="mt-10 rounded-lg bg-white p-6 shadow-md" aria-labelledby="forecast-heading">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 id="forecast-heading" className="text-2xl font-bold text-green-800">
                3-Day Farm Forecast
              </h2>
              <p className="mt-2 text-gray-700">Sample local forecast layout for quick farming decisions.</p>
            </div>
            <p className="rounded bg-green-50 px-4 py-2 text-sm font-semibold text-green-800">
              Location: Your Farm Region
            </p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {forecast.map((item) => (
              <article key={item.day} className="rounded-lg border border-green-200 p-5" aria-labelledby={`${item.day.toLowerCase().replaceAll(" ", "-")}-forecast-heading`}>
                <h3 id={`${item.day.toLowerCase().replaceAll(" ", "-")}-forecast-heading`} className="text-xl font-bold text-green-800">
                  {item.day}
                </h3>
                <dl className="mt-4 space-y-3 text-gray-700">
                  <div>
                    <dt className="font-semibold text-gray-900">Condition</dt>
                    <dd>{item.condition}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-gray-900">Temperature</dt>
                    <dd>{item.temperature}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-gray-900">Rainfall</dt>
                    <dd>{item.rainfall}</dd>
                  </div>
                </dl>
                <p className="mt-4 rounded bg-green-50 p-3 text-sm text-gray-700">
                  {item.advice}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10" aria-labelledby="advisory-heading">
          <h2 id="advisory-heading" className="text-2xl font-bold text-green-800">
            Weather-Based Farming Tips
          </h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {advisories.map((advisory) => (
              <article key={advisory.title} className="rounded-lg bg-white p-5 shadow-md" aria-labelledby={`${advisory.title.toLowerCase()}-heading`}>
                <h3 id={`${advisory.title.toLowerCase()}-heading`} className="text-xl font-bold text-green-800">
                  {advisory.title}
                </h3>
                <p className="mt-2 text-gray-700">{advisory.detail}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default Weather;
