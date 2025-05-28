"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What is this platform and how can it help my business?",
    answer:
      "Our platform is a customizable inventory and business management system designed to help you track income and expenses, manage stock, maintain employee records, handle orders, and generate bills — all from one dashboard.",
  },
  {
    question: "Do I need technical skills to use this system?",
    answer:
      "Not at all. The system is user-friendly and built for non-technical users. Whether you're a business owner or staff, you can start using it with minimal training.",
  },
  {
    question: "Can I track income, expenses, and profits in real time?",
    answer:
      "Yes. Our platform gives you real-time visibility into your income, expenses, and profit trends, helping you make informed business decisions quickly.",
  },
  {
    question: "Can I manage stock and create orders easily?",
    answer:
      "Absolutely. You can add and update stock, monitor inventory levels, and process customer orders seamlessly — all from a centralized system.",
  },
  {
    question: "Can I generate bills and maintain employee records?",
    answer:
      "Yes. The system lets you generate professional bills and invoices, while also keeping detailed employee information and tracking their activities if needed.",
  },
  {
    question: "Is the platform customizable for different business needs?",
    answer:
      "Definitely. The platform is designed to be flexible and can be customized to fit the specific needs of your business or your clients’ businesses.",
  },
];

export default function According() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-14 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center bg-orange-500/10 rounded-full px-6 py-2 mb-6">
            <HelpCircle className="w-5 h-5 text-orange-600 mr-2" />
            <span className="text-orange-600 text-sm font-medium">
              Common Questions
            </span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Frequently Asked
            <span className="text-orange-600"> Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Got questions? We've got answers! Check out our most common
            questions below.
          </p>
        </div>

        <div className="w-full mx-auto space-y-6 ">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl overflow-hidden hover:border-orange-500/50 transition-all duration-300"
            >
              <button
                className="w-full flex justify-between items-center p-6 text-left bg-white hover:bg-gray-50 transition-colors"
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="text-xl text-gray-900 font-semibold">
                  {faq.question}
                </h3>
                <span className="ml-6 flex-shrink-0 text-orange-600 transition-transform duration-300">
                  {activeIndex === index ? (
                    <ChevronUp className="w-6 h-6" />
                  ) : (
                    <ChevronDown className="w-6 h-6" />
                  )}
                </span>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out ${
                  activeIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                <div className="p-6 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
