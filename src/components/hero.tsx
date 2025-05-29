import React from "react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="w-full">
      <div className="bg-gray-50  flex flex-col justify-center items-center py-20">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-orange-500">Simple</span>{" "}
            <span className="text-gray-800">Inventory</span>
            <br />
            <span className="text-gray-800">Management Software.</span>
          </h1>

          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            The best inventory software for small businesses to manage their
            physical inventory, including supplies, materials, tools, and
            equipment.
          </p>

          {/* CTA Buttons */}
          <div className="flex justify-center items-center space-x-6">
            <button className="bg-orange-500 hover:bg-orange-600 text-white cursor-pointer px-8 py-3 rounded-lg text-md font-medium transition-colors duration-200">
              Start Free Trial
            </button>

            <button className="flex items-center space-x-2 text-orange-500 hover:text-orange-600 font-medium">
              <span>See All Plans</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div className=" lg:w-[1200px] mx-auto px-4">
          <div className="bg-white  border rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/dashboard-v2.PNG"
              width={1200}
              height={1200}
              alt="Dashboard Interface"
              className="w-full h-full  object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
