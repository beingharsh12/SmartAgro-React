import React from 'react'
const zaidCrops = [
  {
    id: 1,
    name: "Watermelon",
    scientificName: "Citrullus lanatus",
    sowing: "Mar-Apr",
    harvesting: "May-Jun",
    conditions: "Hot and dry climate, well-drained sandy soil",
    uses: "Fresh fruit, juice production",
    // image: watermelonImg,
  },
  {
    id: 2,
    name: "Muskmelon",
    scientificName: "Cucumis melo",
    sowing: "Feb-Mar",
    harvesting: "May-Jun",
    conditions: "Warm climate, sandy loam soil, moderate irrigation",
    uses: "Fresh fruit, desserts, juices",
    // image: muskmelonImg,
  },
  {
    id: 3,
    name: "Cucumber",
    scientificName: "Cucumis sativus",
    sowing: "Feb-Mar",
    harvesting: "Apr-Jun",
    conditions: "Warm weather, fertile soil, regular watering",
    uses: "Salads, pickles, fresh consumption",
    // image: cucumberImg,
  },
  {
    id: 4,
    name: "Bitter Gourd",
    scientificName: "Momordica charantia",
    sowing: "Feb-Apr",
    harvesting: "May-Jul",
    conditions: "Hot climate, well-drained soil",
    uses: "Vegetable, medicinal purposes",
    // image: bitterGourdImg,
  },
  {
    id: 5,
    name: "Pumpkin",
    scientificName: "Cucurbita maxima",
    sowing: "Feb-Mar",
    harvesting: "May-Jul",
    conditions: "Warm climate, fertile loamy soil",
    uses: "Vegetable, sweets, animal feed",
    // image: pumpkinImg,
  },
  {
    id: 6,
    name: "Fodder Crops",
    scientificName: "Various Species",
    sowing: "Mar-Apr",
    harvesting: "May-Jun",
    conditions: "Warm climate, adequate irrigation",
    uses: "Livestock feed",
    // image: fodderImg,
  },
];

const ZaidCropsCard = () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-10">
            {zaidCrops.map((crop) => (
                <section    
                    key={crop.id}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-103 transition-transform duration-300"
                >
                    <img
                        src={crop.image}
                        alt={crop.name}
                        className="w-full h-56 object-cover"
                    />
                    <div className="p-4">
                        <h2 className="text-2xl font-bold">
                            {crop.id}. {crop.name}
                        </h2>
                        <p className="italic text-gray-600 mb-3">
                            ({crop.scientificName})
                        </p>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <strong>Sowing:</strong> {crop.sowing}
                            </li>
                            <li>
                                <strong>Harvesting:</strong> {crop.harvesting}
                            </li>
                            <li>
                                <strong>Conditions:</strong> {crop.conditions}
                            </li>
                            {crop.states && (
                                <li>
                                    <strong>States:</strong> {crop.states}
                                </li>
                            )}
                            {crop.uses && (
                                <li>
                                    <strong>Uses:</strong> {crop.uses}
                                </li>
                            )}
                        </ul>
                    </div>
                </section>
            ))}
        </section>
    )
}

export default ZaidCropsCard