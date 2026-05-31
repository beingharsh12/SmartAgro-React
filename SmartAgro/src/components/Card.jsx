import React from "react";
import kharif from "../assets/kharif.png";
import rabi from "../assets/rabi.png";
import zaid from "../assets/zaid.png";
import { useNavigate } from "react-router-dom";

const cardData = [
  {
    title: "Rabi",
    description: "The season of renewal and growth.",
    img: rabi,
    route: "/Seasons/rabi"
  },
  {
    title: "Kharif",
    description: "The hot season with long days.",
    img: kharif,
    route: "/Seasons/kharif"
  },
  {
    title: "Zaid",
    description: "The season of harvest and change.",
    img: zaid,
    route: "/Seasons/zaid"
  },
];

const Card = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center gap-6 flex-wrap py-10">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white flex flex-col
hover:scale-104 transition-transform duration-300 cursor-pointer"
        >
          <img
            src={card.img}
            alt={card.title}
            className="w-full h-48 object-cover"
          />

          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">{card.title}</h2>
            <p className="text-gray-600">{card.description}</p>
          </div>
          <button 
          onClick={() => navigate(card.route)}
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-all duration-300 m-4">Learn More</button>
        </div>
      ))}
    </div>
  );
};

export default Card;    