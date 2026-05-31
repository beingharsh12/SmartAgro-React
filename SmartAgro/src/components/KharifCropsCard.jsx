import React from 'react'

const kharifCrops = [
  {
    id: 1,
    name: "Rice",
    scientificName: "Oryza sativa",
    sowing: "Jun-Jul",
    harvesting: "Sep-Nov",
    conditions: "High temperature, high humidity, heavy rainfall",
    states: "West Bengal, Uttar Pradesh, Punjab, Odisha",
    // image: riceImg,
  },
  {
    id: 2,
    name: "Maize",
    scientificName: "Zea mays",
    sowing: "Jun-Jul",
    harvesting: "Sep-Oct",
    conditions: "Warm climate, moderate rainfall, fertile soil",
    uses: "Food, animal feed, starch production",
    // image: maizeImg,
  },
  {
    id: 3,
    name: "Cotton",
    scientificName: "Gossypium",
    sowing: "May-Jul",
    harvesting: "Oct-Jan",
    conditions: "Warm climate, moderate rainfall, black soil",
    uses: "Textile industry, cottonseed oil",
    // image: cottonImg,
  },
  {
    id: 4,
    name: "Soybean",
    scientificName: "Glycine max",
    sowing: "Jun-Jul",
    harvesting: "Sep-Oct",
    conditions: "Warm climate, well-drained soil, moderate rainfall",
    uses: "Edible oil, protein-rich food, animal feed",
    // image: soybeanImg,
  },
  {
    id: 5,
    name: "Groundnut",
    scientificName: "Arachis hypogaea",
    sowing: "Jun-Jul",
    harvesting: "Sep-Oct",
    conditions: "Warm climate, sandy loam soil, moderate rainfall",
    uses: "Edible oil, snacks, animal feed",
    // image: groundnutImg,
  },
  {
    id: 6,
    name: "Jowar",
    scientificName: "Sorghum bicolor",
    sowing: "Jun-Jul",
    harvesting: "Sep-Oct",
    conditions: "Hot climate, drought resistant, low rainfall",
    uses: "Food grain, fodder",
    // image: jowarImg,
  },
];

const KharifCropsCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-10">
  {kharifCrops.map((crop) => (
    <div
      key={crop.id}
      className="bg-white rounded-xl shadow-lg overflow-hidden border"
    >
      {/* <img
        src={crop.image}
        alt={crop.name}
        className="w-full h-56 object-cover"
      />
 */}

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

          {/* <li>
            <strong>Harvesting:</strong> {crop.harvesting}
          </li> */}

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
    </div>
  ))}
</div>
  )
}

export default KharifCropsCard