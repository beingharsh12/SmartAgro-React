import { useEffect, useState } from "react";

const DEFAULT_LOCATION = {
  name: "Delhi",
  country: "India",
  latitude: 28.6139,
  longitude: 77.209,
};

const weatherCodes = {
  0: "Clear sky",
  1: "Mainly clear",
  2: "Partly cloudy",
  3: "Overcast",
  45: "Fog",
  48: "Depositing rime fog",
  51: "Light drizzle",
  53: "Drizzle",
  55: "Dense drizzle",
  61: "Slight rain",
  63: "Rain",
  65: "Heavy rain",
  71: "Slight snow",
  73: "Snow",
  75: "Heavy snow",
  80: "Rain showers",
  81: "Rain showers",
  82: "Violent rain showers",
  95: "Thunderstorm",
  96: "Thunderstorm with hail",
  99: "Thunderstorm with hail",
};

const getSprayAdvice = (rain, wind) => {
  if (rain >= 5){
    return "Avoid spraying because rain may wash off pesticides or foliar nutrients.";
  } 
  if (wind >= 20){
    return "Avoid spraying during strong wind to reduce drift and uneven coverage.";
  }
  else{

    return "Good spraying window if leaves are dry and no local gusts are present.";
  }
};

const getIrrigationAdvice = (rain, evapotranspiration, humidity) => {
  if (rain >= 8) return "Skip irrigation and check fields for drainage or waterlogging.";
  if (rain >= 2) return "Reduce irrigation and inspect soil moisture before watering.";
  if (evapotranspiration >= 4 || humidity < 35) return "Plan light irrigation, preferably morning or evening.";
  return "Irrigate only if the top soil is dry around the root zone.";
};

const getHeatAdvice = (maxTemp) => {
  if (maxTemp >= 38) return "High heat stress risk. Schedule field work early and protect young seedlings.";
  if (maxTemp >= 34) return "Moderate heat stress. Watch vegetables and nursery crops closely.";
  return "Heat stress risk is low for most common field operations.";
};


//comopnenttt started from here...

const Weather = () => {

  //React state management with useState to manage user input, weather API response, loading state and error handling.
  const [searchTerm, setSearchTerm] = useState(DEFAULT_LOCATION.name);
  const [location, setLocation] = useState(DEFAULT_LOCATION);
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchWeather = async (selectedLocation) => {
    setLoading(true);
    setError("");

    try {

      //Geneating the URL like this: 
      // https://api.open-meteo.com/v1/forecast?latitude=28.6139&longitude=77.209&current=temperature_2m,relative_humidity_2m,precipitation,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum,wind_speed_10m_max,et0_fao_evapotranspiration&timezone=auto&forecast_days=5
      const params = new URLSearchParams({
        latitude: selectedLocation.latitude,
        longitude: selectedLocation.longitude,
        current: "temperature_2m,relative_humidity_2m,precipitation,weather_code,wind_speed_10m",
        daily: "weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum,wind_speed_10m_max,et0_fao_evapotranspiration",
        timezone: "auto",
        forecast_days: "5",
      });


      //fetch that url and get the response and check if the response is ok or not. If not ok then throw an error.

      const response = await fetch(`https://api.open-meteo.com/v1/forecast?${params}`);

      if (!response.ok) {
        throw new Error("Weather data could not be loaded.");
      }

      const data = await response.json();
      console.log(data)
      setWeatherData(data);
    } catch (fetchError) {
      setError(fetchError.message);
    } finally {
      setLoading(false);
    }
  };


  // First API call to fetch weather data for the default location when the component mounts.
  useEffect(() => {
    fetchWeather(location); 
  }, [location]);

  const searchLocation = async (event) => {
    event.preventDefault();

    if (!searchTerm.trim()) return;

    setLoading(true);
    setError("");

    try {

      //Geocoding API call to search for the location based on user input. It fetches the latitude and longitude of the searched city or district.
      const response = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(searchTerm)}&count=1&language=en&format=json`
      );

      if (!response.ok) {
        throw new Error("Location search failed.");
      }

      const data = await response.json();

      if (!data.results?.length) {
        throw new Error("No matching location found. Try a nearby city or district.");
      }

      const result = data.results[0];
      // console.log(result)

      // set the location state with the new location data and fetch the weather for that location.
      setLocation({
        name: result.name,
        country: result.country,
        latitude: result.latitude,
        longitude: result.longitude,
      });
    } catch (searchError) {
      setError(searchError.message);
      setLoading(false);
    }
  };

  const current = weatherData?.current;
  const currentCondition = current ? weatherCodes[current.weather_code] || "Weather update" : "";
  const forecast = weatherData?.daily
    ? weatherData.daily.time.map((date, index) => {
        const rain = weatherData.daily.precipitation_sum[index] ?? 0;
        const wind = weatherData.daily.wind_speed_10m_max[index] ?? 0;
        const evapotranspiration = weatherData.daily.et0_fao_evapotranspiration[index] ?? 0;
        const maxTemp = weatherData.daily.temperature_2m_max[index] ?? 0;

        return {
          date,
          condition: weatherCodes[weatherData.daily.weather_code[index]] || "Weather update",
          maxTemp,
          minTemp: weatherData.daily.temperature_2m_min[index],
          rain,
          wind,
          evapotranspiration,
          irrigation: getIrrigationAdvice(rain, evapotranspiration, current?.relative_humidity_2m ?? 50),
          spraying: getSprayAdvice(rain, wind),
          heat: getHeatAdvice(maxTemp),
        };
      })
    : [];

  return (
    <section className="w-full min-h-screen bg-green-100 px-4 py-30" aria-labelledby="weather-heading">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="font-semibold uppercase tracking-wide text-green-700">Live Farm Weather</p>
          <h1 id="weather-heading" className="mt-3 text-4xl font-bold text-green-800">
            Farming Conditions Forecast
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-700">
            Search any city or district to check weather, irrigation needs, spray windows, and heat stress risk.
          </p>
        </div>

        <form onSubmit={searchLocation} className="mx-auto mt-10 flex max-w-2xl flex-col gap-3 sm:flex-row">
          <input
            type="text"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            aria-label="Search location"
            placeholder="Search city or district"
            className="flex-1 rounded-lg border border-green-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button type="submit" className="rounded-lg bg-green-700 px-6 py-3 font-semibold text-white hover:bg-green-800">
            Search
          </button>
        </form>

        {error && (
          <p className="mx-auto mt-6 max-w-2xl rounded-lg bg-red-50 p-4 text-center font-semibold text-red-700">
            {error}
          </p>
        )}

        <section className="mt-10 rounded-lg bg-white p-6 shadow-md" aria-labelledby="current-weather-heading">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 id="current-weather-heading" className="text-2xl font-bold text-green-800">
                {location.name}, {location.country}
              </h2>
              <p className="mt-2 text-gray-700">Data from Open-Meteo free weather API.</p>
            </div>

            {loading ? (
              <p className="rounded bg-green-50 px-4 py-3 font-semibold text-green-800">Loading weather...</p>
            ) : current && (
              <div className="grid gap-3 text-gray-700 sm:grid-cols-2 lg:grid-cols-5">
                <div className="rounded-lg bg-green-50 p-4">
                  <p className="text-sm font-semibold text-green-700">Condition</p>
                  <p className="mt-1 font-bold text-gray-900">{currentCondition}</p>
                </div>
                <div className="rounded-lg bg-green-50 p-4">
                  <p className="text-sm font-semibold text-green-700">Temperature</p>
                  <p className="mt-1 font-bold text-gray-900">{current.temperature_2m} C</p>
                </div>
                <div className="rounded-lg bg-green-50 p-4">
                  <p className="text-sm font-semibold text-green-700">Humidity</p>
                  <p className="mt-1 font-bold text-gray-900">{current.relative_humidity_2m}%</p>
                </div>
                <div className="rounded-lg bg-green-50 p-4">
                  <p className="text-sm font-semibold text-green-700">Wind</p>
                  <p className="mt-1 font-bold text-gray-900">{current.wind_speed_10m} km/h</p>
                </div>
                <div className="rounded-lg bg-green-50 p-4">
                  <p className="text-sm font-semibold text-green-700">Rain Now</p>
                  <p className="mt-1 font-bold text-gray-900">{current.precipitation} mm</p>
                </div>
              </div>
            )}
          </div>
        </section>

        {!loading && forecast.length > 0 && (
          <section className="mt-10" aria-labelledby="farm-forecast-heading">
            <h2 id="farm-forecast-heading" className="text-2xl font-bold text-green-800">
              5-Day Farming Advisory
            </h2>
            <div className="mt-5 grid gap-5 lg:grid-cols-5 md:grid-cols-2">
              {forecast.map((day) => (
                <article key={day.date} className="rounded-lg bg-white p-5 shadow-md">
                  <p className="font-semibold text-green-700">
                    {new Date(day.date).toLocaleDateString("en-IN", {
                      weekday: "short",
                      day: "numeric",
                      month: "short",
                    })}
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-green-900">{day.condition}</h3>
                  <dl className="mt-4 space-y-2 text-sm text-gray-700">
                    <div className="flex justify-between gap-3">
                      <dt>Temp</dt>
                      <dd className="font-semibold">{day.minTemp} C - {day.maxTemp} C</dd>
                    </div>
                    <div className="flex justify-between gap-3">
                      <dt>Rain</dt>
                      <dd className="font-semibold">{day.rain} mm</dd>
                    </div>
                    <div className="flex justify-between gap-3">
                      <dt>Wind</dt>
                      <dd className="font-semibold">{day.wind} km/h</dd>
                    </div>
                    <div className="flex justify-between gap-3">
                      <dt>ET0</dt>
                      <dd className="font-semibold">{day.evapotranspiration} mm</dd>
                    </div>
                  </dl>
                  <div className="mt-4 space-y-3 text-sm text-gray-700">
                    <p className="rounded bg-green-50 p-3"><strong>Irrigation:</strong> {day.irrigation}</p>
                    <p className="rounded bg-yellow-50 p-3"><strong>Spraying:</strong> {day.spraying}</p>
                    <p className="rounded bg-orange-50 p-3"><strong>Heat:</strong> {day.heat}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
      </div>
    </section>
  );
};

export default Weather;
