import { FaLeaf } from "react-icons/fa";
import { BsFillCloudSunFill } from "react-icons/bs";
import { FaStore } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";

const offersData = [
  {
    id: "crop-guide",
    title: "Crop Guide",
    icon: <FaLeaf />,
    description: "Get expert recommendations for growing healthy crops."
  },
  {
    id: "weather-updates",
    title: "Weather Updates",
    icon: <BsFillCloudSunFill />,
    description: "Stay ahead with real-time weather forecasts for your farm."
  },
  {
    id: "purchase",
    title: "Purchase",
    icon: <FaStore />,
    description: "Buy seeds, fertilizers, and equipment at the best prices."
  },
  {
    id: "agriculturists",
    title: "Agriculturists",
    icon: <FaUsers />,
    description: "Connect with experts for personalized farming advice."
  }
];


const WhatWeOfferCard = () => {
  return (
    <div>
        <div className="w-full mx-auto grid md:grid-cols-2 gap-8">
            {offersData.map((item) => (
                <article key={item.id} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center" aria-labelledby={`${item.id}-heading`}>
                    <div className="text-4xl mb-4 text-green-800" aria-hidden="true">{item.icon}</div>
                    <h3 id={`${item.id}-heading`} className="text-2xl font-bold mb-2 text-green-800">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                </article>
            ))}
        </div>
    </div>
  )
}

export default WhatWeOfferCard
