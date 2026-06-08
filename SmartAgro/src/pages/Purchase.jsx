const products = [
  {
    name: "Certified Seeds",
    price: "From Rs. 180/kg",
    description: "High-germination wheat, paddy, maize, and pulse seeds selected for Indian growing seasons.",
    features: ["Season-wise varieties", "Quality tested", "Suitable for small farms"],
  },
  {
    name: "Organic Fertilizers",
    price: "From Rs. 450/bag",
    description: "Compost, vermicompost, and bio-fertilizers to improve soil health without harsh chemical load.",
    features: ["Soil friendly", "Moisture retention", "Long-term fertility"],
  },
  {
    name: "Crop Protection Kit",
    price: "From Rs. 799",
    description: "Basic pest and disease control supplies for common field problems in Rabi and Kharif crops.",
    features: ["Pest guidance", "Protective gloves", "Sprayer-ready packs"],
  },
  {
    name: "Farm Tools",
    price: "From Rs. 299",
    description: "Hand tools, irrigation accessories, and field essentials for everyday farm work.",
    features: ["Durable build", "Easy handling", "Repair support"],
  },
];

const Purchase = () => {
  return (
    <section className="w-full min-h-screen bg-green-100 px-4 py-30" aria-labelledby="purchase-heading">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="font-semibold uppercase tracking-wide text-green-700">SmartAgro Marketplace</p>
          <h1 id="purchase-heading" className="mt-3 text-4xl font-bold text-green-800">
            Purchase Farm Essentials
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-700">
            Find reliable seeds, fertilizers, crop protection products, and tools for your seasonal farming needs.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <article key={product.name} className="flex h-full flex-col rounded-lg bg-white p-6 shadow-md" aria-labelledby={`${product.name.toLowerCase().replaceAll(" ", "-")}-heading`}>
              <h2 id={`${product.name.toLowerCase().replaceAll(" ", "-")}-heading`} className="text-2xl font-bold text-green-800">
                {product.name}
              </h2>
              <p className="mt-2 font-semibold text-green-700">{product.price}</p>
              <p className="mt-4 flex-1 text-gray-700">{product.description}</p>
              <ul className="mt-5 space-y-2 text-left text-sm text-gray-700">
                {product.features.map((feature) => (
                  <li key={feature} className="rounded bg-green-50 px-3 py-2">
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="tel:+919412632757"
                className="mt-6 rounded bg-green-700 px-4 py-3 text-center font-semibold text-white hover:bg-green-800 focus-visible:outline-green-900"
                aria-label={`Call SmartAgro to ask about ${product.name}`}
              >
                Ask for Details
              </a>
            </article>
          ))}
        </div>

        <section className="mt-10 rounded-lg bg-white p-6 shadow-md" aria-labelledby="purchase-process-heading">
          <h2 id="purchase-process-heading" className="text-2xl font-bold text-green-800">
            How Ordering Works
          </h2>
          <ol className="mt-4 grid gap-4 text-gray-700 md:grid-cols-3">
            <li className="rounded border border-green-200 p-4">
              <strong className="block text-green-800">1. Choose products</strong>
              Select the crop supplies that match your season and field requirements.
            </li>
            <li className="rounded border border-green-200 p-4">
              <strong className="block text-green-800">2. Confirm availability</strong>
              Contact SmartAgro to check local stock, delivery options, and pricing.
            </li>
            <li className="rounded border border-green-200 p-4">
              <strong className="block text-green-800">3. Receive guidance</strong>
              Get basic usage guidance before applying products in your field.
            </li>
          </ol>
        </section>
      </div>
    </section>
  );
};

export default Purchase;
