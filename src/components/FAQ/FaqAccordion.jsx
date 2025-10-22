import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FaqAccordion = ({ faqs, title }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {title && (
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            {title}
          </h2>
        )}

        <div className="space-y-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`bg-white rounded-xl overflow-hidden shadow-sm border transition-all duration-300 ${
                  isOpen ? "border-blue-600" : "border-gray-200"
                }`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center px-6 py-5 text-left"
                >
                  <span
                    className={`text-lg font-medium transition ${
                      isOpen ? "text-blue-600" : "text-gray-800"
                    }`}
                  >
                    {item.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-blue-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </button>

                <div
                  className={`px-6 pb-5 text-gray-600 text-base leading-relaxed transition-all duration-300 ${
                    isOpen ? "block" : "hidden"
                  }`}
                >
                  {item.answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqAccordion;
