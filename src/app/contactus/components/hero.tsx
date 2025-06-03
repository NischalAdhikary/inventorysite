import React from "react";
import {
  PhoneCall,
  Mail,
  Clock,
  MapPin,
  MessageCircle,
  Globe,
} from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="w-full">
      <div className="bg-gradient-to-b from-gray-50 to-white flex flex-col justify-center items-center py-20">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <div className="inline-flex items-center bg-orange-100 rounded-full px-6 py-2 mb-8">
            <MessageCircle className="w-5 h-5 text-orange-500 mr-2" />
            <span className="text-orange-600 text-sm font-medium">
              24/7 Customer Support
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-gray-900">We're Here to </span>
            <span className="text-orange-500">Help You</span>
          </h1>

          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Get in touch with our expert team for personalized support with your
            inventory management needs. We're committed to helping your business
            succeed.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 group cursor-pointer">
              <PhoneCall className="w-10 h-10 text-orange-500 mx-auto mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Call Our Team
              </h3>
              <p className="text-gray-600 mb-4">
                Available for urgent support and inquiries
              </p>
              <p className="text-orange-500 font-semibold">
                +977 (981) 123-4567
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 group cursor-pointer">
              <Mail className="w-10 h-10 text-blue-600 mx-auto mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Email Support
              </h3>
              <p className="text-gray-600 mb-4">
                Get detailed technical assistance
              </p>
              <p className="text-blue-600 font-semibold">
                support@inventoryeats.com
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 group cursor-pointer">
              <MapPin className="w-10 h-10 text-green-600 mx-auto mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Visit Our Office
              </h3>
              <p className="text-gray-600 mb-4">
                Drop by during business hours
              </p>
              <p className="text-green-600 font-semibold">
                Biratnagar-5, Nepal
              </p>
            </div>
          </div>

          <div className="mt-6 pt-8 ">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-gray-600">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-orange-500" />
                <span>Mon - Fri: 9AM - 6PM NPT</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-orange-500" />
                <span>Supporting Customers Worldwide</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
