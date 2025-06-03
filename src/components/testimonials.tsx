"use client";
import React, { useState, useEffect } from "react";
import {
  Quote,
  Star,
  TrendingUp,
  Package,
  BarChart3,
  Clock,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useParams } from "next/navigation";

const TestimonialCard = () => {
  const params = useParams();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Martinez",
      position: "Operations Manager",
      company: "FreshMart Chain",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      testimonial:
        "Inventory Eats revolutionized our supply chain management. We've reduced stockouts by 85% and cut inventory costs by 30%. The real-time analytics are a game-changer for our 15 locations.",
      rating: 5,
      metrics: "85% reduction in stockouts",
      icon: TrendingUp,
    },
    {
      id: 2,
      name: "David Chen",
      position: "Restaurant Owner",
      company: "Chen's Kitchen Empire",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      testimonial:
        "The automated reordering feature alone saves us 15 hours per week. Food waste dropped by 40% and our profit margins improved significantly. Best investment we've made.",
      rating: 5,
      metrics: "40% reduction in food waste",
      icon: Package,
    },
    {
      id: 3,
      name: "Lisa Thompson",
      position: "Procurement Director",
      company: "Gourmet Delights Group",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      testimonial:
        "The predictive analytics help us forecast demand with 95% accuracy. We've eliminated overstock situations and our cash flow has never been better. Truly intelligent inventory management.",
      rating: 5,
      metrics: "95% forecast accuracy",
      icon: BarChart3,
    },
    {
      id: 4,
      name: "Michael Rodriguez",
      position: "Supply Chain Manager",
      company: "Urban Bistro Network",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      testimonial:
        "Implementation was seamless and the support team is exceptional. Our inventory turnover improved by 60% and we now have complete visibility across all our restaurant locations.",
      rating: 5,
      metrics: "60% better inventory turnover",
      icon: Clock,
    },
  ];

  useEffect(() => {
    const autoSlide = setInterval(() => {
      if (!isAnimating) {
        nextSlide();
      }
    }, 5000);

    return () => clearInterval(autoSlide);
  }, [currentIndex, isAnimating]);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex space-x-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < rating ? "text-yellow-400 fill-current" : "text-gray-600"
            } transition-colors duration-300`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-14 px-4 relative overflow-hidden">
      {/* <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div> */}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center bg-orange-500/10 rounded-full px-6 py-2 mb-6">
            <Package className="w-5 h-5 text-orange-600 mr-2" />
            <span className="text-orange-600 text-sm font-medium">
              Customer Success Stories
            </span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Trusted by Leading
            <span className="text-orange-600"> Restaurant Chains</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See how Inventory Eats helps restaurants reduce waste, optimize
            costs, and streamline operations with intelligent inventory
            management.
          </p>
        </div>

        {/* Testimonial Cards Carousel */}
        <div className="relative mb-10">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            disabled={isAnimating}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-gray-100 text-orange-600 hover:text-orange-700 p-3 rounded-full border border-gray-200 hover:border-orange-500 transition-all duration-300 transform  disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            disabled={isAnimating}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-gray-100 text-orange-600 hover:text-orange-700 p-3 rounded-full border border-gray-200 hover:border-orange-500 transition-all duration-300 transform  disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="overflow-hidden mx-12">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => {
                const IconComponent = testimonial.icon;
                return (
                  <div
                    key={testimonial.id}
                    className="w-full flex-shrink-0  p-6 px-4"
                  >
                    <div className="group relative transform transition-all duration-500 max-w-4xl mx-auto">
                      <div className="relative bg-white rounded-2xl p-8 md:p-12 border border-gray-200 hover:border-orange-500/50 transition-all duration-500">
                        <div className="absolute -top-6 -right-6 w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center border-4 border-white group-hover:bg-orange-500 transition-all duration-500 group-hover:rotate-12 ">
                          <Quote className="w-10 h-10 text-orange-600 group-hover:text-white transition-colors duration-500" />
                        </div>
                        <div className="grid md:grid-cols-3 gap-8 items-center">
                          <div className="flex flex-col items-center text-center md:items-start md:text-left">
                            <div className="relative mb-4">
                              <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-20 h-20 rounded-full object-cover border-4 border-orange-500/30 group-hover:border-orange-500 transition-all duration-300"
                              />
                              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-orange-400/20 to-orange-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                            <h4 className="font-semibold text-gray-900 text-xl mb-1 group-hover:text-orange-600 transition-colors duration-300">
                              {testimonial.name}
                            </h4>
                            <p className="text-gray-600 text-sm mb-1">
                              {testimonial.position}
                            </p>
                            <p className="text-orange-600 text-sm font-medium mb-4">
                              {testimonial.company}
                            </p>

                            <div className="flex items-center">
                              <div className="bg-orange-500/20 rounded-full p-2 mr-3">
                                <IconComponent className="w-5 h-5 text-orange-400" />
                              </div>
                              <span className="text-orange-400 text-sm font-semibold bg-orange-500/10 px-3 py-1 rounded-full">
                                {testimonial.metrics}
                              </span>
                            </div>
                          </div>
                          <div className="md:col-span-2">
                            <StarRating rating={testimonial.rating} />
                            <blockquote className="text-gray-700 text-xl leading-relaxed relative">
                              <span className="text-8xl text-gray-200 absolute -top-4 -left-4 font-serif opacity-30">
                                "
                              </span>
                              <p className="relative z-10 italic">
                                {testimonial.testimonial}
                              </p>
                            </blockquote>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                disabled={isAnimating}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-orange-600 "
                    : "bg-gray-300 hover:bg-gray-400"
                } disabled:cursor-not-allowed`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
