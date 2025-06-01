// import React from "react";

// import { ChevronRight } from "lucide-react";
// import Image from "next/image";

// export default function Hero() {
//   return (
//     <div className="w-full">
//       <div className="bg-gray-50  flex flex-col justify-center items-center py-20">
//         <div className="max-w-6xl mx-auto text-center mb-16">
//           <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
//             <span className="text-gray-800">Exploure Our</span>{" "}
//             <span className="text-gray-800">Inventory</span>
//             <br />
//             <span className="text-orange-500">Management Features.</span>
//           </h1>

//           <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
//             Discover how Inventory Eats simplifies inventory with features
//             designed for ease and organization.
//           </p>

//           <div className="flex justify-center items-center space-x-8">
//             <button className="bg-orange-500 hover:bg-orange-600 text-white cursor-pointer px-8 py-3 rounded-lg text-md font-medium transition-colors duration-200">
//               Start Free Trial
//             </button>

//             <button className="flex items-center space-x-2 text-orange-500 hover:text-orange-600 font-medium">
//               <span>See All Plans</span>
//               <ChevronRight className="w-4 h-4" />
//             </button>
//           </div>
//         </div>
//         {/* <div className=" lg:w-[1200px] mx-auto px-4">
//           <div className="bg-white  border rounded-lg overflow-hidden shadow-lg">
//             <Image
//               src="/dashboard-v2.PNG"
//               width={1200}
//               height={1200}
//               alt="Dashboard Interface"
//               className="w-full h-full  object-contain"
//               priority
//             />
//           </div>
//         </div> */}
//       </div>
//     </div>
//   );
// }
import React from "react";
import { PhoneCall, Mail, Clock } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="w-full">
      <div className="bg-gray-50 flex flex-col justify-center items-center py-20">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-gray-800">Get in </span>
            <span className="text-orange-500">Touch</span>
          </h1>

          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Have questions about our inventory management solution? Our team is
            here to help. Reach out to us through any of the following channels.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <PhoneCall className="w-8 h-8 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-gray-600">+1 (555) 123-4567</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Mail className="w-8 h-8 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-gray-600">support@inventoryeats.com</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Clock className="w-8 h-8 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Business Hours</h3>
              <p className="text-gray-600">Mon - Fri: 9AM - 6PM EST</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
