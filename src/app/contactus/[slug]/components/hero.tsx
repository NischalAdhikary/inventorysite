// // import React from "react";
// // import { MapPin, Phone } from "lucide-react";

// // export default function Hero() {
// //   return (
// //     <div className="w-full bg-neutral-50">
// //       <div className="w-full mx-auto container md:max-w-7xl flex gap-6 py-20 px-2">
// //         <div className="flex-1 flex flex-col px-2 gap-6">
// //           <div className="flex flex-col gap-3">
// //             <h1 className="text-5xl font-bold">
// //               Talk to our customer care team{" "}
// //             </h1>
// //             <p className="text-gray-600 text-lg">
// //               Have any question about our product feel free to contact us.{" "}
// //             </p>
// //           </div>
// //           <div className="flex flex-col gap-4">
// //             <h3 className="text-2xl font-bold">Our Office</h3>
// //             <div className="w-full h-70 bg-green-200"></div>
// //             <p className="text-gray-600 text-lg">
// //               Have questions about the system,how it works and how to use it?
// //               Feel free to contact us.
// //             </p>
// //           </div>
// //           <div className="flex gap-2">
// //             <div className="w-1/2 p-4 flex flex-col gap-4 ">
// //               <h3 className="text-xl font-bold">Biratnagar</h3>
// //               <div className="flex gap-2">
// //                 <MapPin size={20} />
// //                 <span>Khochakhal, Biratnagar-5, Nepal</span>
// //               </div>
// //               <div className="flex gap-2">
// //                 <Phone size={20} />
// //                 <span>01-555-1234</span>
// //               </div>
// //             </div>
// //             <div className="w-1/2 p-4 flex flex-col gap-4 ">
// //               <h3 className="text-xl font-bold">Dharan</h3>
// //               <div className="flex gap-2">
// //                 <MapPin size={20} />
// //                 <span>Desiline, Dharan-2, Nepal</span>
// //               </div>
// //               <div className="flex gap-2">
// //                 <Phone size={20} />
// //                 <span>01-555-1234</span>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //         <div className="flex-1 flex flex-col gap-6">
// //           <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-full">
// //             <div className="mb-8">
// //               <h2 className="text-3xl font-bold text-gray-900 mb-3">
// //                 Send Us a Message
// //               </h2>
// //               <p className="text-gray-600 text-lg">
// //                 Get in touch with us to discuss your inventory management needs.
// //               </p>
// //             </div>

// //             <form
// //               action="#"
// //               method="POST"
// //               autoComplete="off"
// //               className="space-y-6 flex flex-col h-[calc(100%-120px)]"
// //             >
// //               <div className="flex flex-col gap-6 flex-1">
// //                 <div>
// //                   <input
// //                     id="name"
// //                     name="name"
// //                     placeholder="Full Name"
// //                     className="w-full px-4 py-4 rounded-lg border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-colors"
// //                     required
// //                   />
// //                 </div>

// //                 <div>
// //                   <input
// //                     id="company"
// //                     name="company"
// //                     placeholder="Company"
// //                     className="w-full px-4 py-4 rounded-lg border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-colors"
// //                   />
// //                 </div>

// //                 <div>
// //                   <input
// //                     type="email"
// //                     id="email"
// //                     name="email"
// //                     placeholder="Email"
// //                     className="w-full px-4 py-4 rounded-lg border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-colors"
// //                     required
// //                   />
// //                 </div>

// //                 <div>
// //                   <input
// //                     type="tel"
// //                     id="phone"
// //                     name="phone"
// //                     placeholder="Phone"
// //                     className="w-full px-4 py-4 rounded-lg border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-colors"
// //                     required
// //                   />
// //                 </div>

// //                 <div className="flex-1">
// //                   <textarea
// //                     id="message"
// //                     name="message"
// //                     placeholder="Message"
// //                     className="w-full h-full px-4 py-4 rounded-lg border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-colors resize-none min-h-[120px]"
// //                     required
// //                   />
// //                 </div>
// //               </div>

// //               <div className="flex justify-end mt-auto pt-4">
// //                 <button
// //                   type="submit"
// //                   className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
// //                 >
// //                   Send Message
// //                 </button>
// //               </div>
// //             </form>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// import React, { JSX } from "react";
// import {
//   MapPin,
//   Phone,
//   Users,
//   Settings,
//   DollarSign,
//   Upload,
//   FilePlus,
//   Receipt,
//   MessageSquare,
//   MessageSquareCode,
// } from "lucide-react";
// import Image from "next/image";

// // Enhanced Hero Component

// type ContentType = {
//   [key: string]: {
//     title: string;
//     description: string;
//     image: string;
//     icon: JSX.Element;
//     contactInfo: {
//       title: string;
//       description: string;
//     }[];
//   };
// };

// const content: ContentType = {
//   support: {
//     title: "Get Technical Support",
//     description:
//       "Our support team is ready to help you resolve any technical issues or questions about our platform.",
//     image: "/technical.jpg",
//     icon: <MessageSquareCode className="w-12 h-12 text-orange-500" />,
//     contactInfo: [
//       {
//         title: "24/7 Support",
//         description: "Available round the clock for urgent technical issues",
//       },
//       {
//         title: "Knowledge Base",
//         description: "Access our extensive documentation and tutorials",
//       },
//     ],
//   },
//   sales: {
//     title: "Talk to Sales Team",
//     description:
//       "Discuss enterprise solutions, custom pricing, and package options with our sales experts.",
//     image: "/saleteam.jpg",
//     icon: <DollarSign className="w-12 h-12 text-blue-600" />,
//     contactInfo: [
//       {
//         title: "Enterprise Solutions",
//         description: "Custom solutions for large-scale operations",
//       },
//       {
//         title: "Pricing Plans",
//         description: "Flexible pricing options for businesses of all sizes",
//       },
//     ],
//   },
// };
// export default function Hero({ type }: { type: string }) {
//   const currentContent = content[type] || content.support;
//   return (
//     <div className="w-full bg-neutral-50">
//       <div className="w-full mx-auto container md:max-w-7xl flex gap-6 py-20 px-2">
//         {/* <div className="flex-1 flex flex-col px-2 gap-6">
//           <div className="flex flex-col gap-4 group">
//             <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent leading-tight tracking-tight">
//               Talk to our customer care team{" "}
//             </h1>
//             <p className="text-gray-600 text-xl font-medium leading-relaxed">
//               Have any question about our product feel free to contact us.{" "}
//             </p>
//           </div>

//           <div className="flex flex-col gap-6">
//             <h3 className="text-3xl font-bold text-gray-900 tracking-tight">
//               Our Office
//             </h3>
//             <div className="w-full h-70  relative bg-gradient-to-r from-green-200 to-green-300 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
//               <Image
//                 src="/dashboard-v2.PNG"
//                 fill
//                 alt="Dashboard Interface"
//                 className="absolute"
//               />
//             </div>
//             <p className="text-gray-600 text-lg leading-relaxed">
//               Have questions about the system, how it works and how to use it?
//               Feel free to contact us.
//             </p>
//           </div>

//           <div className="flex gap-4">
//             <div className="w-1/2 p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer border border-gray-100">
//               <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-500 transition-colors duration-300">
//                 Biratnagar
//               </h3>
//               <div className="flex gap-3 items-center mb-3 text-gray-700 hover:text-gray-900 transition-colors duration-200">
//                 <MapPin size={20} className="text-orange-500" />
//                 <span className="font-medium">
//                   Khochakhal, Biratnagar-5, Nepal
//                 </span>
//               </div>
//               <div className="flex gap-3 items-center text-gray-700 hover:text-gray-900 transition-colors duration-200">
//                 <Phone size={20} className="text-blue-600" />
//                 <span className="font-medium">01-555-1234</span>
//               </div>
//             </div>

//             <div className="w-1/2 p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer border border-gray-100">
//               <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
//                 Dharan
//               </h3>
//               <div className="flex gap-3 items-center mb-3 text-gray-700 hover:text-gray-900 transition-colors duration-200">
//                 <MapPin size={20} className="text-orange-500" />
//                 <span className="font-medium">Desiline, Dharan-2, Nepal</span>
//               </div>
//               <div className="flex gap-3 items-center text-gray-700 hover:text-gray-900 transition-colors duration-200">
//                 <Phone size={20} className="text-blue-600" />
//                 <span className="font-medium">01-555-1234</span>
//               </div>
//             </div>
//           </div>
//         </div> */}
//         <div className="flex-1 flex flex-col px-2 gap-8">
//           {/* Hero Header */}
//           <div className="flex flex-col gap-4 group">
//             <div className="inline-flex items-center gap-3 mb-4">
//               {currentContent.icon}
//               <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent leading-tight tracking-tight">
//                 {currentContent.title}
//               </h1>
//             </div>
//             <p className="text-gray-600 text-xl font-medium leading-relaxed">
//               {currentContent.description}
//             </p>
//           </div>

//           {/* Image Section */}
//           <div className="relative w-full h-[300px] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group">
//             <Image
//               src={currentContent.image}
//               fill
//               alt="Team Image"
//               className="object-cover group-hover:scale-105 transition-transform duration-500"
//             />
//           </div>

//           {/* Info Cards */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
//             {currentContent.contactInfo.map((info, index) => (
//               <div
//                 key={index}
//                 className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 group cursor-pointer"
//               >
//                 <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors">
//                   {info.title}
//                 </h3>
//                 <p className="text-gray-600 leading-relaxed">
//                   {info.description}
//                 </p>
//               </div>
//             ))}
//           </div>

//           {/* Contact Information */}
//           <div className="flex gap-4 mt-4">
//             <div className="w-1/2 p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer border border-gray-100">
//               <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-500">
//                 Our Main Office
//               </h3>
//               <div className="flex gap-3 items-center mb-3 text-gray-700">
//                 <MapPin size={20} className="text-orange-500" />
//                 <span className="font-medium">Biratnagar-5, Nepal</span>
//               </div>
//               <div className="flex gap-3 items-center text-gray-700">
//                 <Phone size={20} className="text-blue-600" />
//                 <span className="font-medium">01-555-1234</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="flex-1 flex flex-col gap-6">
//           <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 h-full hover:shadow-2xl transition-all duration-500 group">
//             <div className="mb-8">
//               <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
//                 Send Us a Message
//               </h2>
//               <p className="text-gray-600 text-lg font-medium leading-relaxed">
//                 Get in touch with us to discuss your inventory management needs.
//               </p>
//             </div>

//             <form
//               action="#"
//               method="POST"
//               autoComplete="off"
//               className="space-y-6 flex flex-col h-[calc(100%-120px)]"
//             >
//               <div className="flex flex-col gap-6 flex-1">
//                 <div className="group">
//                   <input
//                     id="name"
//                     name="name"
//                     placeholder="Full Name"
//                     className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none transition-all duration-300 font-medium placeholder:text-gray-400 hover:border-gray-300 hover:shadow-md"
//                     required
//                   />
//                 </div>

//                 <div className="group">
//                   <input
//                     id="company"
//                     name="company"
//                     placeholder="Company"
//                     className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-300 font-medium placeholder:text-gray-400 hover:border-gray-300 hover:shadow-md"
//                   />
//                 </div>

//                 <div className="group">
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     placeholder="Email"
//                     className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none transition-all duration-300 font-medium placeholder:text-gray-400 hover:border-gray-300 hover:shadow-md"
//                     required
//                   />
//                 </div>

//                 <div className="group">
//                   <input
//                     type="tel"
//                     id="phone"
//                     name="phone"
//                     placeholder="Phone"
//                     className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-300 font-medium placeholder:text-gray-400 hover:border-gray-300 hover:shadow-md"
//                     required
//                   />
//                 </div>

//                 <div className="flex-1 group">
//                   <textarea
//                     id="message"
//                     name="message"
//                     placeholder="Message"
//                     className="w-full h-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none transition-all duration-300 resize-none min-h-[120px] font-medium placeholder:text-gray-400 hover:border-gray-300 hover:shadow-md"
//                     required
//                   />
//                 </div>
//               </div>

//               <div className="flex justify-end mt-auto pt-4">
//                 <button
//                   type="submit"
//                   className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105 focus:ring-4 focus:ring-orange-200 active:scale-95"
//                 >
//                   Send Message
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { JSX } from "react";
import { MapPin, Phone, MessageSquareCode, DollarSign } from "lucide-react";
import Image from "next/image";

type ContentType = {
  [key: string]: {
    title: string;
    description: string;
    image: string;
    icon: JSX.Element;
    contactInfo: {
      title: string;
      description: string;
    }[];
  };
};

const content: ContentType = {
  support: {
    title: "Get Technical Support",
    description:
      "Our support team is ready to help you resolve any technical issues or questions about our platform.",
    image: "/technical.jpg",
    icon: <MessageSquareCode className="w-12 h-12 text-orange-500" />,
    contactInfo: [
      {
        title: "24/7 Support",
        description: "Available round the clock for urgent technical issues",
      },
      {
        title: "Knowledge Base",
        description: "Access our extensive documentation and tutorials",
      },
    ],
  },
  sales: {
    title: "Talk to Sales Team",
    description:
      "Discuss enterprise solutions, custom pricing, and package options with our sales experts.",
    image: "/saleteam.jpg",
    icon: <DollarSign className="w-12 h-12 text-blue-600" />,
    contactInfo: [
      {
        title: "Enterprise Solutions",
        description: "Custom solutions for large-scale operations",
      },
      {
        title: "Pricing Plans",
        description: "Flexible pricing options for businesses of all sizes",
      },
    ],
  },
};

export default function Hero({ type }: { type: string }) {
  const currentContent = content[type] || content.support;

  return (
    <div className="w-full bg-neutral-50">
      <div className="w-full mx-auto container flex flex-col lg:flex-row gap-10 py-10 md:py-20 px-4 md:px-6 max-w-7xl">
        {/* Left Column */}
        <div className="flex-1 flex flex-col gap-8">
          {/* Hero Header */}
          <div className="flex flex-col gap-4 group">
            <div className="inline-flex items-start md:items-center gap-3 mb-4 flex-col md:flex-row">
              {currentContent.icon}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent">
                {currentContent.title}
              </h1>
            </div>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              {currentContent.description}
            </p>
          </div>

          {/* Image Section */}
          <div className="relative w-full h-[200px] sm:h-[300px] rounded-2xl overflow-hidden shadow-xl group">
            <Image
              src={currentContent.image}
              fill
              priority
              alt="Team Image"
              className="object-cover group-hover:scale-105 transition-all duration-500"
            />
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {currentContent.contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 group"
              >
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-500">
                  {info.title}
                </h3>
                <p className="text-gray-600">{info.description}</p>
              </div>
            ))}
          </div>

          {/* Office Location */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full sm:w-1/2 p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-500">
                Our Main Office
              </h3>
              <div className="flex gap-3 items-center mb-3">
                <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">
                  Biratnagar-5, Nepal
                </span>
              </div>
              <div className="flex gap-3 items-center">
                <Phone className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-gray-700 font-medium">01-555-1234</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="flex-1">
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-100 h-full transition-all duration-300 hover:shadow-2xl">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                Send Us a Message
              </h2>
              <p className="text-gray-600 text-lg">
                Get in touch with us to discuss your inventory management needs.
              </p>
            </div>

            <form className="flex flex-col gap-8">
              {[
                {
                  id: "name",
                  type: "text",
                  placeholder: "Full Name",
                  required: true,
                },
                { id: "company", type: "text", placeholder: "Company" },
                {
                  id: "email",
                  type: "email",
                  placeholder: "Email",
                  required: true,
                },
                {
                  id: "phone",
                  type: "tel",
                  placeholder: "Phone",
                  required: true,
                },
              ].map((field) => (
                <div key={field.id} className="group">
                  <input
                    {...field}
                    className="w-full px-4 py-3 md:py-4 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none transition-all duration-300 text-gray-700 placeholder:text-gray-400 hover:border-gray-300"
                    required={field.required}
                  />
                </div>
              ))}

              <div className="flex-1 min-h-[150px]">
                <textarea
                  placeholder="Message"
                  className="w-full h-full min-h-[150px] px-4 py-3 md:py-4 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none transition-all duration-300 text-gray-700 placeholder:text-gray-400 hover:border-gray-300 resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="self-end bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 md:px-10 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] focus:ring-4 focus:ring-orange-200 active:scale-95"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
