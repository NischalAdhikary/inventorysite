import React, { JSX } from "react";
import {
  CheckCheck,
  ArrowRight,
  Play,
  Star,
  Users,
  TrendingUp,
  Shield,
  Zap,
  DollarSign,
  PieChart,
  BarChart2,
  Upload,
  FolderOpen,
  Bell,
  FilePlus,
  Clock,
  FileText,
  Receipt,
  Percent,
  Printer,
  Settings,
  ToggleLeft,
  Layers,
  ClipboardCheck,
} from "lucide-react";
type FeatureItem = {
  icon: JSX.Element;
  title: string;
  description: string;
};

type Feature = {
  label: string;
  image: string;
  description: string;
  detailedDescription: string;
  list: FeatureItem[];
  additionalFeatures: string[];
};

type FeaturesData = {
  [key: string]: Feature;
};
const featuresData: FeaturesData = {
  incomeExpense: {
    label: "Income & Expense Tracking",
    image: "/financial-dashboard.png",
    description:
      "Keep a detailed and organized record of your business finances.",
    detailedDescription:
      "Take complete control of your restaurant's financial health with our comprehensive income and expense tracking system. Monitor every transaction, analyze spending patterns, and make data-driven decisions to boost profitability.",
    list: [
      {
        icon: <DollarSign className="w-6 h-6 text-orange-500" />,
        title: "Record income and expenses across categories",
        description:
          "Easily categorize all financial transactions with smart auto-categorization and custom category creation.",
      },
      {
        icon: <PieChart className="w-6 h-6 text-orange-500" />,
        title: "View financial summaries and transaction reports",
        description:
          "Generate comprehensive reports with visual charts and exportable data for better financial insights.",
      },
      {
        icon: <BarChart2 className="w-6 h-6 text-orange-500" />,
        title: "Monitor profitability and spending trends",
        description:
          "Track your restaurant's performance over time with trend analysis and predictive insights.",
      },
    ],
    additionalFeatures: [
      "Multi-currency support for international operations",
      "Tax calculation and compliance reporting",
      "Automated recurring transaction recording",
      "Cash flow forecasting and budgeting tools",
      "Integration with accounting software",
      "Real-time profit/loss calculations",
    ],
  },

  stockManagement: {
    label: "Stock Management",
    image: "/inventory-dashboard.png",
    description:
      "Stay on top of your inventory to avoid stockouts and overstock.",
    detailedDescription:
      "Never run out of ingredients again with our intelligent inventory management system. Track stock levels in real-time, set automated reorder points, and optimize your inventory costs.",
    list: [
      {
        icon: <Upload className="w-6 h-6 text-orange-500" />,
        title: "Easily add, update, and categorize stock items",
        description:
          "Quick item entry with barcode scanning, batch uploads, and smart categorization for efficient inventory management.",
      },
      {
        icon: <FolderOpen className="w-6 h-6 text-orange-500" />,
        title: "Track real-time stock availability",
        description:
          "Monitor inventory levels across multiple locations with instant updates and accurate stock counts.",
      },
      {
        icon: <Bell className="w-6 h-6 text-orange-500" />,
        title: "Get notified when stock is low",
        description:
          "Receive instant alerts via email, SMS, or app notifications when items reach minimum stock levels.",
      },
    ],
    additionalFeatures: [
      "Barcode scanning for quick stock updates",
      "Supplier management and purchase orders",
      "Expiry date tracking and waste reduction",
      "Multi-location inventory synchronization",
      "Cost tracking and pricing optimization",
      "Inventory valuation and reporting",
    ],
  },

  employeeManagement: {
    label: "Employee Management",
    image: "/staff-dashboard.png",
    description:
      "Efficiently manage employee details, roles, and responsibilities.",
    detailedDescription:
      "Streamline your workforce management with comprehensive employee tracking, role assignments, and performance monitoring tools designed for restaurant operations.",
    list: [
      {
        icon: <Users className="w-6 h-6 text-orange-500" />,
        title: "Store and manage employee records",
        description:
          "Maintain complete employee profiles with contact information, documents, and employment history.",
      },
      {
        icon: <Shield className="w-6 h-6 text-orange-500" />,
        title: "Assign user roles and access permissions",
        description:
          "Control system access with role-based permissions ensuring data security and operational efficiency.",
      },
      {
        icon: <ClipboardCheck className="w-6 h-6 text-orange-500" />,
        title: "Track staff attendance or task completion",
        description:
          "Monitor work hours, shift schedules, and task completion with detailed reporting and analytics.",
      },
    ],
    additionalFeatures: [
      "Shift scheduling and time tracking",
      "Performance evaluation and feedback",
      "Payroll integration and calculations",
      "Training module and certification tracking",
      "Leave management and approvals",
      "Staff communication and messaging",
    ],
  },

  orderProcessing: {
    label: "Order Processing",
    image: "/order-dashboard.png",
    description: "Create, track, and manage customer orders with ease.",
    detailedDescription:
      "Streamline your order workflow from kitchen to customer with our comprehensive order management system. Handle dine-in, takeout, and delivery orders seamlessly.",
    list: [
      {
        icon: <FilePlus className="w-6 h-6 text-orange-500" />,
        title: "Create and manage new orders quickly",
        description:
          "Fast order entry with customizable menus, modifiers, and special instructions for accurate order processing.",
      },
      {
        icon: <Clock className="w-6 h-6 text-orange-500" />,
        title: "Track order status from start to completion",
        description:
          "Real-time order tracking with kitchen display integration and customer notification system.",
      },
      {
        icon: <FileText className="w-6 h-6 text-orange-500" />,
        title: "Generate invoices directly from orders",
        description:
          "Automatic invoice generation with customizable templates and integrated payment processing.",
      },
    ],
    additionalFeatures: [
      "Kitchen display system integration",
      "Table management and reservations",
      "Customer order history and preferences",
      "Multiple payment method support",
      "Delivery tracking and management",
      "Order analytics and reporting",
    ],
  },

  billing: {
    label: "Billing & Invoicing",
    image: "/billing-dashboard.png",
    description:
      "Streamline billing with customizable receipts and tax settings.",
    detailedDescription:
      "Create professional invoices and manage your billing processes with automated tax calculations, discount applications, and multiple payment options.",
    list: [
      {
        icon: <Receipt className="w-6 h-6 text-orange-500" />,
        title: "Create bills and professional receipts",
        description:
          "Generate branded receipts and invoices with your restaurant logo and customizable templates.",
      },
      {
        icon: <Percent className="w-6 h-6 text-orange-500" />,
        title: "Apply discounts and calculate taxes automatically",
        description:
          "Smart tax calculation based on location and automatic discount application with promotional codes.",
      },
      {
        icon: <Printer className="w-6 h-6 text-orange-500" />,
        title: "Download or print invoices on demand",
        description:
          "Instant receipt printing and digital delivery options with email and SMS capabilities.",
      },
    ],
    additionalFeatures: [
      "Split billing and group payments",
      "Recurring billing for subscriptions",
      "Payment reminder automation",
      "Financial reporting and analytics",
      "Integration with accounting software",
      "Multi-currency and tax compliance",
    ],
  },

  customization: {
    label: "Custom Features",
    image: "/customization-dashboard.png",
    description: "A flexible system that grows with your business needs.",
    detailedDescription:
      "Adapt the platform to your unique restaurant requirements with flexible customization options, feature toggles, and scalable architecture that grows with your business.",
    list: [
      {
        icon: <Settings className="w-6 h-6 text-orange-500" />,
        title: "Customize features based on client requirements",
        description:
          "Tailor the system to match your specific workflow and business processes with custom configurations.",
      },
      {
        icon: <ToggleLeft className="w-6 h-6 text-orange-500" />,
        title: "Enable or disable features using toggles",
        description:
          "Control which features are active for different user roles and locations with simple toggle switches.",
      },
      {
        icon: <Layers className="w-6 h-6 text-orange-500" />,
        title: "Built with a scalable and modular architecture",
        description:
          "Enterprise-grade architecture that scales from single location to multi-location restaurant chains.",
      },
    ],
    additionalFeatures: [
      "Custom workflow automation",
      "API integrations with third-party systems",
      "White-label branding options",
      "Advanced reporting and dashboard customization",
      "Multi-language and localization support",
      "24/7 technical support and training",
    ],
  },
};

const FeaturePage = ({ featureKey = "incomeExpense" }) => {
  const feature = featuresData[featureKey];

  if (!feature) {
    return <div>Feature not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-orange-500/10 rounded-full px-6 py-2 mb-6">
              {feature.list[0].icon}
              <span className="text-orange-600 text-sm font-medium ml-2">
                Feature Details
              </span>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {feature.label}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              {feature.detailedDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2 justify-center">
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-3 border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50 font-semibold transition-colors flex items-center gap-2 justify-center">
                <Play className="w-5 h-5" />
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Core <span className="text-orange-600">Capabilities</span>
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {feature.list.map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-orange-500/50 transition-all duration-300 hover:shadow-xl"
              >
                <div className="mb-6">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300">
                    {React.cloneElement(item.icon, {
                      className:
                        "w-6 h-6 text-orange-600 group-hover:text-white",
                    })}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Additional <span className="text-orange-600">Features</span>
          </h2>
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-6">
              {feature.additionalFeatures.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200 hover:border-orange-500/50 transition-colors"
                >
                  <CheckCheck className="w-5 h-5 text-orange-600 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-4xl font-bold mb-6">
              Why Choose Our {feature.label}?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Join thousands of restaurants already using Inventory Eats to
              streamline their {feature.label.toLowerCase()} operations and
              boost efficiency.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">500+</div>
                <div className="opacity-90">Restaurants Trust Us</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">99%</div>
                <div className="opacity-90">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="opacity-90">Customer Support</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                Get Started Now
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturePage;
