"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What is this platform and how can it help my restaurant?",
    answer:
      "Our platform is an all-in-one restaurant management system that helps you track finances, manage staff, handle orders, create bills, and monitor overall operations — all from a single, easy-to-use dashboard.",
  },
  {
    question: "Do I need technical skills to use this system?",
    answer:
      "Not at all. The system is built for simplicity. Whether you're a restaurant owner or a staff member, you can get started quickly without any technical background.",
  },
  {
    question: "Can I track income, expenses, and profits in real time?",
    answer:
      "Yes. You get real-time financial insights including income, expenses, and profit margins — with easy-to-read charts and reports to help make smart decisions.",
  },
  {
    question:
      "Can I check my restaurant's performance and business health easily?",
    answer:
      "Absolutely. Our platform provides a clear snapshot of your restaurant's overall status — from sales trends to staff performance — helping you stay in control and make data-driven decisions.",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "Yes! We offer a 14-day free trial so you can explore all the features with no commitment and no credit card required.",
  },
];

export default function According() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full container mx-auto md:max-w-8xl px-4 md:px-8 py-16 md:py-10">
      <div className="text-center mb-12">
        <h3 className="text-xl font-heading font-bold text-primary-500 mb-2">
          Common Questions
        </h3>
        <h2 className="text-3xl font-heading text-secondary-800 font-semibold mb-2">
          Frequently Asked Questions
        </h2>
        <p className="text-secondary-600 font-sans max-w-2xl mx-auto text-lg">
          Got questions? We've got answers! Check out our most common questions
          below.
        </p>
      </div>

      <div className="w-full mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <button
              className="w-full flex justify-between items-center p-4 text-left bg-white hover:bg-gray-50 transition-colors"
              onClick={() => toggleAccordion(index)}
            >
              <h1 className="text-2xl font-heading text-secondary-900">
                {faq.question}
              </h1>
              <span className="ml-6 flex-shrink-0 text-secondary-500 transition-transform duration-300">
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
              <div className="p-4 bg-gray-50 font-sans  border-gray-200">
                <p className="text-gray-600 text-lg">{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
