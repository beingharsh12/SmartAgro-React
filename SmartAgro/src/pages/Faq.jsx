import { useState } from "react";

const accordionData = [
  {
    id: 1,
    question: "What is SmartAgro?",
    answer:
      "SmartAgro is a platform that helps farmers access crop guidance, weather updates, agricultural experts, and farming resources in one place.",
  },
  {
    id: 2,
    question: "How can I check weather updates?",
    answer:
      "You can visit the Weather section of the website to get real-time weather forecasts and conditions for your location.",
  },
  {
    id: 3,
    question: "Can I get advice from agricultural experts?",
    answer:
      "Yes, SmartAgro connects users with experienced agriculturists who can provide guidance on crops, soil health, and farming practices.",
  },
  {
    id: 4,
    question: "Is SmartAgro free to use?",
    answer:
      "Yes, the core features of SmartAgro are available for free, making farming information accessible to everyone.",
  },
];

function Faq() {
  const [selected, setSelected] = useState(null);

  const handleAccordion = (id) => {
    setSelected(selected === id ? null : id);
  };

  return (
    <section className="bg-gray-50 py-16 px-4 m-30 w-full">
      <div className="max-w-4xl mx-auto">
        
        <h1 className="text-4xl font-bold text-center text-green-700 mb-3">
          Frequently Asked Questions
        </h1>

        <p className="text-center text-gray-600 mb-10">
          Find answers to common questions about SmartAgro.
        </p>

        <div className="space-y-4">
          {accordionData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200"
            >
              <button
                onClick={() => handleAccordion(item.id)}
                className="w-full flex justify-between items-center px-6 py-5 text-left"
              >
                <h2 className="text-lg font-semibold text-gray-800">
                  {item.question}
                </h2>

                <span
                  className={`text-2xl font-bold text-green-600 transition-transform duration-300 ${
                    selected === item.id ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>

              {selected === item.id && (
                <div className="px-6 pb-5">
                  <p className="text-gray-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Faq;