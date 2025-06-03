"use client";
import React from "react";
import { ChevronRight, Star } from "lucide-react";

export default function Hero() {
  const clients = [
    { name: "Microsoft", logo: "/fb.png" },
    { name: "Google", logo: "/fb.png" },
    { name: "Amazon", logo: "/fb.png" },
    { name: "Apple", logo: "/fb.png" },
    { name: "Meta", logo: "/fb.png" },
    { name: "Netflix", logo: "/fb.png" },
    { name: "Tesla", logo: "/fb.png" },
    { name: "Spotify", logo: "/fb.png" },
    { name: "Adobe", logo: "/fb.png" },
    { name: "Salesforce", logo: "/fb.png" },
    { name: "Oracle", logo: "/fb.png" },
    { name: "IBM", logo: "/fb.png" },
  ];

  return (
    <div className="w-full">
      <div className="bg-gray-50 flex flex-col justify-center items-center py-20">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <div className="inline-flex items-center bg-orange-100 rounded-full px-4 py-2 mb-6">
            <Star className="w-5 h-5 text-orange-500 mr-2" />
            <span className="text-orange-600 text-sm font-medium">
              Trusted by 1000+ businesses worldwide
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-gray-900">See How Our Customers</span>
            <br />
            <span className="text-orange-500">Transform Their Business</span>
          </h1>

          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover how businesses like yours achieve better inventory
            management, increased efficiency, and improved profitability with
            our solution.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
            <button className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl text-md font-semibold transition-all duration-200 hover:shadow-lg">
              Get Started Today
            </button>

            <button className="w-full sm:w-auto flex items-center justify-center gap-2 text-orange-500 hover:text-orange-600 font-semibold group">
              <span>Schedule a Demo</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        <div className="w-full px-4">
          <div className="text-center mb-12">
            <p className="text-sm text-gray-500 uppercase tracking-wide font-semibold mb-4">
              Trusted by 500+ Companies Worldwide
            </p>
          </div>

          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
            <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-gray-50 to-transparent z-10"></div>

            <div className="flex animate-scroll items-center">
              {clients.map((client, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 mx-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <div className="w-32 h-20 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md hover:scale-105 transition-all duration-300 relative">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 rounded-xl items-center justify-center hidden">
                      <span className="text-white font-bold text-sm">
                        {client.name.slice(0, 2).toUpperCase()}
                      </span>
                    </div>
                  </div>
                </div>
              ))}

              {clients.map((client, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 mx-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <div className="w-32 h-20 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md hover:scale-105 transition-all duration-300 relative">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 rounded-xl items-center justify-center hidden">
                      <span className="text-white font-bold text-sm">
                        {client.name.slice(0, 2).toUpperCase()}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
