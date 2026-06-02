import React from 'react'
import { FaLeaf } from "react-icons/fa";
import { BsFillCloudSunFill } from "react-icons/bs";
import { FaStore } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";

const offersData = [
  {
    id: "crop-guide",
    title: "Crop Guide",
    icon: <FaLeaf />, // Maps well to Lucide 'Leaf' or similar
    description: "Get expert recommendations for growing healthy crops."
  },
  {
    id: "weather-updates",
    title: "Weather Updates",
    icon: <BsFillCloudSunFill />, // Maps well to Lucide 'CloudSun' or similar
    description: "Stay ahead with real-time weather forecasts for your farm."
  },
  {
    id: "purchase",
    title: "Purchase",
    icon: <FaStore />, // Maps well to Lucide 'Store' or 'ShoppingBag'
    description: "Buy seeds, fertilizers, and equipment at the best prices."
  },
  {
    id: "agriculturists",
    title: "Agriculturists",
    icon: <FaUsers />, // Maps well to Lucide 'Users' or 'UserCheck'
    description: "Connect with experts for personalized farming advice."
  }
];


const WhatWeOfferCard = () => {
  return (
    <div>
        <div className="w-full mx-auto grid md:grid-cols-2 gap-8">
            {offersData.map((item) => (
                <div key={item.id} className="bg-white p-6 rounded-lg shadow-md w-[200] flex flex-col items-center text-center">
                    <div className="text-4xl mb-4 text-green-800">{item.icon}</div>
                    <h3 className="text-2xl font-bold mb-2 text-green-800">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default WhatWeOfferCard