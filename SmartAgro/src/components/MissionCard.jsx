import { LuSprout } from "react-icons/lu";
import { CiGlobe } from "react-icons/ci";

const companyData = [
  {
    id: "mission",
    title: "Mission",
    icon: <LuSprout />,
    description: "To enhance agricultural productivity with sustainable and data-driven solutions for farmers across the globe."
  },
  {
    id: "vision",
    title: "Vision",
    icon: <CiGlobe />,
    description: "A future where every farmer uses smart technology to grow crops efficiently, sustainably, and profitably."
  }
];


const MissionCard = () => {
  return (
    <div>
        <div className="max-w-2xl mx-auto grid md:grid-cols-2 gap-8">
            {companyData.map((item) => (
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

export default MissionCard
