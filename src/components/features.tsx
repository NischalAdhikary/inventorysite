"use client";
import React from "react";
import {
  Package,
  BarChart3,
  Scan,
  Truck,
  ShoppingCart,
  FileText,
  Users,
  Settings,
  Smartphone,
  Cloud,
  Shield,
  Zap,
  TrendingUp,
  MapPin,
  AlertTriangle,
  CheckCircle,
  DollarSign,
  Upload,
  FilePlus,
  Receipt,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function FeaturesSection() {
  const router = useRouter();
  const handleFeatureClick = (label: string) => {
    const slug = label
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");

    router.push(`/features/${slug}`);
  };

  const mainFeatures = [
    {
      icon: DollarSign,
      title: "Income & Expense Tracking",
      description:
        "Keep a detailed and organized record of your business finances.",
      color: "orange",
      list: [
        "Record income and expenses across categories",
        "View financial summaries and transaction reports",
        "Monitor profitability and spending trends",
      ],
    },
    {
      icon: Upload,
      title: "Stock Management",
      description:
        "Stay on top of your inventory to avoid stockouts and overstock.",
      color: "blue",
      list: [
        "Easily add, update, and categorize stock items",
        "Track real-time stock availability",
        "Get notified when stock is low",
      ],
    },
    {
      icon: Users,
      title: "Employee Management",
      description:
        "Efficiently manage employee details, roles, and responsibilities.",
      color: "orange",
      list: [
        "Store and manage employee records",
        "Assign user roles and access permissions",
        "Track staff attendance or task completion",
      ],
    },
    {
      icon: FilePlus,
      title: "Order Processing",
      description: "Create, track, and manage customer orders with ease.",
      color: "blue",
      list: [
        "Create and manage new orders quickly",
        "Track order status from start to completion",
        "Generate invoices directly from orders",
      ],
    },
    {
      icon: Receipt,
      title: "Billing & Invoicing",
      description:
        "Streamline billing with customizable receipts and tax settings.",
      color: "orange",
      list: [
        "Create bills and professional receipts",
        "Apply discounts and calculate taxes automatically",
        "Download or print invoices on demand",
      ],
    },
    {
      icon: Settings,
      title: "Custom Features",
      description: "A flexible system that grows with your business needs.",
      color: "blue",
      list: [
        "Customize features based on client requirements",
        "Enable or disable features using toggles",
        "Built with a scalable and modular architecture",
      ],
    },
  ];
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features for
            <span className="text-orange-500"> Complete </span>
            <span className="text-blue-600">Inventory Control</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to streamline your inventory operations, reduce
            costs, and boost efficiency in one comprehensive platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {mainFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            const isOrange = feature.color === "orange";

            return (
              <div
                key={index}
                onClick={() => handleFeatureClick(feature.title)}
                className="group cursor-pointer bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div
                  className={`w-16 h-16 rounded-2xl ${
                    isOrange ? "bg-orange-100" : "bg-blue-100"
                  } flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <IconComponent
                    className={`w-8 h-8 ${
                      isOrange ? "text-orange-500" : "text-blue-600"
                    }`}
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
