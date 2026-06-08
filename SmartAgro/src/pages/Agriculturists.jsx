const experts = [
  {
    name: "Dr. Meera Sharma",
    role: "Soil and Crop Nutrition Specialist",
    experience: "12 years",
    focus: "Soil testing, fertilizer planning, and yield improvement for wheat, mustard, and pulses.",
  },
  {
    name: "Arjun Patel",
    role: "Irrigation and Farm Planning Advisor",
    experience: "9 years",
    focus: "Water scheduling, drip irrigation, and farm layout planning for small and medium farms.",
  },
  {
    name: "Kavita Rao",
    role: "Plant Protection Consultant",
    experience: "10 years",
    focus: "Pest identification, disease prevention, and safe crop protection practices.",
  },
];

const services = [
  "Crop selection for your season and region",
  "Soil health and nutrient management",
  "Pest and disease diagnosis",
  "Irrigation planning and water saving tips",
  "Harvest timing and storage guidance",
  "Sustainable farming practice support",
];

const Agriculturists = () => {
  return (
    <section className="w-full min-h-screen bg-green-100 px-4 py-30" aria-labelledby="agriculturists-heading">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="font-semibold uppercase tracking-wide text-green-700">Expert Support</p>
          <h1 id="agriculturists-heading" className="mt-3 text-4xl font-bold text-green-800">
            Connect With Agriculturists
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-700">
            Get practical advice from agriculture experts for crop planning, soil care, pest control, and seasonal decisions.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {experts.map((expert) => (
            <article key={expert.name} className="rounded-lg bg-white p-6 shadow-md" aria-labelledby={`${expert.name.toLowerCase().replaceAll(" ", "-")}-heading`}>
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-700 text-2xl font-bold text-white" aria-hidden="true">
                {expert.name
                  .split(" ")
                  .map((part) => part[0])
                  .join("")
                  .slice(0, 2)}
              </div>
              <h2 id={`${expert.name.toLowerCase().replaceAll(" ", "-")}-heading`} className="mt-5 text-2xl font-bold text-green-800">
                {expert.name}
              </h2>
              <p className="mt-1 font-semibold text-green-700">{expert.role}</p>
              <p className="mt-3 text-sm text-gray-600">{expert.experience} experience</p>
              <p className="mt-4 text-gray-700">{expert.focus}</p>
              <a
                href="mailto:support@smartagro.com"
                className="mt-6 inline-block rounded bg-green-700 px-4 py-3 font-semibold text-white hover:bg-green-800 focus-visible:outline-green-900"
                aria-label={`Email SmartAgro to consult ${expert.name}`}
              >
                Request Consultation
              </a>
            </article>
          ))}
        </div>

        <section className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.4fr]" aria-labelledby="services-heading">
          <div className="rounded-lg bg-green-800 p-6 text-white shadow-md">
            <h2 id="services-heading" className="text-2xl font-bold">
              Support Areas
            </h2>
            <p className="mt-3 text-green-50">
              SmartAgro helps farmers turn expert advice into clear field actions.
            </p>
          </div>

          <ul className="grid gap-3 rounded-lg bg-white p-6 shadow-md sm:grid-cols-2">
            {services.map((service) => (
              <li key={service} className="rounded border border-green-200 bg-green-50 px-4 py-3 text-gray-700">
                {service}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  );
};

export default Agriculturists;
