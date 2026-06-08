import kharif from "../assets/kharif.png";
import rabi from "../assets/rabi.png";
import zaid from "../assets/zaid.png";
import { Link } from "react-router-dom";

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
  return (
    <div className="flex justify-center items-stretch gap-6 flex-wrap py-10">
      {cardData.map((card) => (
        <article
          key={card.title}
          aria-labelledby={`${card.title.toLowerCase()}-season-heading`}
          className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white flex flex-col
hover:scale-104 transition-transform duration-300 w-full sm:w-[300px] md:w-[350px]"
        >
          <img
            src={card.img}
            alt={`${card.title} crop season`}
            className="w-full h-48 object-cover"
          />

          <div className="p-4 flex-1">
            <h2 id={`${card.title.toLowerCase()}-season-heading`} className="text-xl font-bold mb-2">
              {card.title}
            </h2>
            <p className="text-gray-600">{card.description}</p>
          </div>
          <Link
            to={card.route}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-all duration-300 m-4 text-center focus-visible:outline-green-800"
            aria-label={`Learn more about ${card.title} season crops`}
          >
            Learn More
          </Link>
        </article>
      ))}
    </div>
  );
};

export default Card;    
