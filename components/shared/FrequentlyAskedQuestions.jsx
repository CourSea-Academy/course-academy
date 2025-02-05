"use client";

import React, { useState } from "react";
import { CircleArrowRight } from "lucide-react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../ui/accordion";

const FrequentlyAskedQuestions = ({ faqData = [] }) => {
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(0);

  if (faqData.length === 0) {
    return <p className="text-center text-gray-500">No FAQs available at the moment.</p>;
  }

  return (
    <section className="py-4 bg-white">
      {/* Desktop View */}
      <div className="hidden sm:flex flex-col md:flex-row gap-6 py-4 sm:py-6 bg-white rounded-lg">
        {/* Questions List */}
        <div className="flex flex-col space-y-4 w-full md:w-3/5">
          {faqData.map((item, index) => (
            <button
              key={index}
              onClick={() => setSelectedQuestionIndex(index)}
              className={`flex items-center justify-between p-3 sm:p-4 rounded-lg font-medium text-left hover:bg-gray-100 transition ${
                selectedQuestionIndex === index
                  ? "bg-gray-200 text-black font-semibold"
                  : "text-gray-600"
              }`}
            >
              <span className="text-sm sm:text-base">{item.question}</span>
              <CircleArrowRight
                className={
                  selectedQuestionIndex === index
                    ? "text-black"
                    : "text-gray-400"
                }
                size={20}
              />
            </button>
          ))}
        </div>

        {/* Answer Section */}
        <div className="w-full md:w-2/5 p-4 sm:p-6 bg-white rounded-lg">
          <p className="text-gray-700 text-sm sm:text-base">
            {faqData[selectedQuestionIndex]?.answer}
          </p>
        </div>
      </div>

      {/* Mobile View */}
      <div className="flex sm:hidden flex-col gap-6 py-4 px-4 bg-white rounded-lg">
        <Accordion type="single" collapsible>
          {faqData.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>
                <p>{item.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FrequentlyAskedQuestions;