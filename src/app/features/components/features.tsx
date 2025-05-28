"use client";
import React from "react";
import { useRouter } from "next/navigation";
import {
  CheckCheck,
  Upload,
  FolderOpen,
  DollarSign,
  PieChart,
  Users,
  Calendar,
  ClipboardList,
  BarChart2,
  Receipt,
  Percent,
  Printer,
  ToggleLeft,
  Layers,
  Settings,
  FilePlus,
  Clock,
  FileText,
  ClipboardCheck,
  Shield,
  Bell,
} from "lucide-react";

const data = [
  {
    label: "Income & Expense Tracking",
    image: "/financial-dashboard.png",
    description:
      "Keep a detailed and organized record of your business finances.",
    list: [
      {
        icon: <DollarSign className="w-6 h-6 text-primary-500" />,
        title: "Record income and expenses across categories",
      },
      {
        icon: <PieChart className="w-6 h-6 text-primary-500" />,
        title: "View financial summaries and transaction reports",
      },
      {
        icon: <BarChart2 className="w-6 h-6 text-primary-500" />,
        title: "Monitor profitability and spending trends",
      },
    ],
  },
  {
    label: "Stock Management",
    image: "/inventory-dashboard.png",
    description:
      "Stay on top of your inventory to avoid stockouts and overstock.",
    list: [
      {
        icon: <Upload className="w-6 h-6 text-primary-500" />,
        title: "Easily add, update, and categorize stock items",
      },
      {
        icon: <FolderOpen className="w-6 h-6 text-primary-500" />,
        title: "Track real-time stock availability",
      },
      {
        icon: <Bell className="w-6 h-6 text-primary-500" />,
        title: "Get notified when stock is low",
      },
    ],
  },
  {
    label: "Employee Management",
    image: "/staff-dashboard.png",
    description:
      "Efficiently manage employee details, roles, and responsibilities.",
    list: [
      {
        icon: <Users className="w-6 h-6 text-primary-500" />,
        title: "Store and manage employee records",
      },
      {
        icon: <Shield className="w-6 h-6 text-primary-500" />,
        title: "Assign user roles and access permissions",
      },
      {
        icon: <ClipboardCheck className="w-6 h-6 text-primary-500" />,
        title: "Track staff attendance or task completion",
      },
    ],
  },
  {
    label: "Order Processing",
    image: "/order-dashboard.png",
    description: "Create, track, and manage customer orders with ease.",
    list: [
      {
        icon: <FilePlus className="w-6 h-6 text-primary-500" />,
        title: "Create and manage new orders quickly",
      },
      {
        icon: <Clock className="w-6 h-6 text-primary-500" />,
        title: "Track order status from start to completion",
      },
      {
        icon: <FileText className="w-6 h-6 text-primary-500" />,
        title: "Generate invoices directly from orders",
      },
    ],
  },
  {
    label: "Billing & Invoicing",
    image: "/billing-dashboard.png",
    description:
      "Streamline billing with customizable receipts and tax settings.",
    list: [
      {
        icon: <Receipt className="w-6 h-6 text-primary-500" />,
        title: "Create bills and professional receipts",
      },
      {
        icon: <Percent className="w-6 h-6 text-primary-500" />,
        title: "Apply discounts and calculate taxes automatically",
      },
      {
        icon: <Printer className="w-6 h-6 text-primary-500" />,
        title: "Download or print invoices on demand",
      },
    ],
  },
  {
    label: "Custom Features",
    image: "/customization-dashboard.png",
    description: "A flexible system that grows with your business needs.",
    list: [
      {
        icon: <Settings className="w-6 h-6 text-primary-500" />,
        title: "Customize features based on client requirements",
      },
      {
        icon: <ToggleLeft className="w-6 h-6 text-primary-500" />,
        title: "Enable or disable features using toggles",
      },
      {
        icon: <Layers className="w-6 h-6 text-primary-500" />,
        title: "Built with a scalable and modular architecture",
      },
    ],
  },
];

export default function Features() {
  const router = useRouter();
  const handleFeatureClick = (label: string) => {
    const slug = label
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");

    router.push(`/features/${slug}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-14 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center bg-orange-500/10 rounded-full px-6 py-2 mb-6">
            <Settings className="w-5 h-5 text-orange-600 mr-2" />
            <span className="text-orange-600 text-sm font-medium">
              Platform Features
            </span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Powerful Tools for
            <span className="text-orange-600"> Modern Restaurants</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From tracking finances to managing inventory, our comprehensive
            solution helps streamline your restaurant operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {data.map((item, index) => (
            <div
              key={index}
              onClick={() => handleFeatureClick(item.label)}
              className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-orange-500/50 transition-all duration-300 hover:shadow-xl"
            >
              <div className="mb-6">
                <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300">
                  {React.cloneElement(item.list[0].icon, {
                    className: "w-6 h-6 text-orange-600 group-hover:text-white",
                  })}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                {item.label}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {item.description}
              </p>

              <div className="space-y-4">
                {item.list.map((listItem, listIndex) => (
                  <div
                    key={listIndex}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <CheckCheck className="w-5 h-5 text-orange-600 flex-shrink-0" />
                    <span className="text-sm">{listItem.title}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <button className="flex items-center text-orange-600 hover:text-orange-700 font-medium group-hover:translate-x-2 transition-transform duration-300">
                  Learn more
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors mr-4">
            Get Started Now
          </button>
          <button className="px-8 py-3 border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50 font-semibold transition-colors">
            View Documentation
          </button>
        </div>
      </div>
    </div>
  );
}
