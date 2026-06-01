import React from "react";
import ZaidCropsCard from "../components/ZaidCropsCard";

const Zaid = () => {
  return (
    <div className="w-full bg-green-100 flex flex-col items-center py-30">
      <h1 className="text-5xl font-bold text-center cursor-pointer text-green-800">
        GUIDE TO ZAID SEASON CROPS (SPRING CROPS)
      </h1>
      <p className="text-lg text-gray-700 max-w-2xl text-center mt-6">
        Sown in Spring ( Mar-Apr ) | Harvested in Summer (June-Jul)
      </p>
      <ZaidCropsCard />
    </div>
  );
};

export default Zaid;
