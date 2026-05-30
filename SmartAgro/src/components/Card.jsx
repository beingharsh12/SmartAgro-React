import React from "react";
import kharif from "../assets/kharif.png";
import rabi from "../assets/rabi.png";
import zaid from "../assets/zaid.png";

const cardData = [
  {
    title: "Rabi",
    description: "The season of renewal and growth.",
    img: rabi
  },
  {
    title: "Kharif",
    description: "The hot season with long days.",
    img: kharif
  },
  {
    title: "Zaid",
    description: "The season of harvest and change.",
    img: zaid
  },
];

const Card = () => {
  return (
    <div className="flex justify-center items-center gap-6 flex-wrap py-10">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white"
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
        </div>
      ))}
    </div>
  );
};

export default Card;    