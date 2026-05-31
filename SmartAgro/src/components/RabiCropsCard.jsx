import React from 'react'

const rabiCrops = [
  {
    id: 1,
    name: "Wheat",
    scientificName: "Triticum aestivum",
    sowing: "Oct-Dec",
    harvesting: "Mar-Apr",
    conditions: "Cool climate, moderate rainfall/irrigation",
    states: "Punjab, Haryana, UP, MP",
    // image: wheatImg,
  },
  {
    id: 2,
    name: "Barley",
    scientificName: "Hordeum vulgare",
    sowing: "Oct-Nov",
    harvesting: "Mar-Apr",
    conditions: "Less water than wheat, tolerates diverse soils",
    uses: "Food, animal feed, malting",
    // image: barleyImg,
  },
  {
    id: 3,
    name: "Mustard",
    scientificName: "Brassica juncea",
    sowing: "Oct-Nov",
    harvesting: "Feb-Mar",
    conditions: "Cool temperatures, dry weather, needs less irrigation",
    uses: "Edible oil, spices",
    // image: mustardImg,
  },
  {
    id: 4,
    name: "Chickpeas",
    scientificName: "Gram/Pulses",
    sowing: "Oct-Dec",
    harvesting: "Mar-Apr",
    conditions: "Mild cool climate, low rainfall",
    uses: "Rich source of protein",
    // image: chickpeasImg,
  },
];

const RabiCropsCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-10">
  {rabiCrops.map((crop) => (
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

export default RabiCropsCard