"use client";
import React from "react";
import { MessageSquare, DollarSign } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Contactdetails() {
  const router = useRouter();
  const handleContactCLick = (label: string) => {
    const slug = label
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");

    router.push(`/contactus/${slug}`);
  };

  return (
    <div className="w-full h-full">
      <div className="w-full mx-auto container py-15 bg-white md:max-w-6xl flex flex-col md:flex-row gap-8 justify-between px-4">
        <div className="flex flex-col gap-11 flex-1">
          <div className="w-full">
            <div className="w-full rounded-2xl flex flex-row-reverse bg-white shadow-lg border border-gray-100 min-h-[300px] p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-full flex flex-row-reverse">
                <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MessageSquare className="w-8 h-8 text-orange-500" />
                </div>
                <div className="flex-1 self-end">
                  <h1 className="text-2xl font-bold text-gray-900 mb-3">
                    Get Help?
                  </h1>
                  <p className="text-gray-600 mb-6">
                    Our support team is here to help you with any questions.
                  </p>

                  <button
                    onClick={() => handleContactCLick("support")}
                    className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Get Support
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="w-full rounded-2xl flex flex-row-reverse bg-white shadow-lg border border-gray-100 min-h-[300px] p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-full flex flex-row-reverse">
                <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <DollarSign className="w-8 h-8 text-blue-600" />
                </div>
                <div className="flex-1 self-end">
                  <h1 className="text-2xl font-bold text-gray-900 mb-3">
                    Contact Sales
                  </h1>
                  <p className="text-gray-600 mb-6">
                    Talk to our sales team about enterprise solutions and
                    pricing.
                  </p>
                  <button
                    onClick={() => handleContactCLick("sales")}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Contact Sales
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                Send Us a Message
              </h2>
              <p className="text-gray-600">
                Get in touch with us to discuss your inventory management needs.
              </p>
            </div>

            <form
              action="#"
              method="POST"
              autoComplete="off"
              className="space-y-5"
            >
              <div>
                <input
                  id="name"
                  name="name"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <input
                  id="company"
                  name="company"
                  placeholder="Company"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-colors"
                />
              </div>

              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Phone"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Message"
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-colors resize-none"
                  required
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
