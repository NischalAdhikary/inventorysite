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
  CheckCircle
} from "lucide-react";

export default function FeaturesSection() {
  const mainFeatures = [
    {
      icon: Package,
      title: "Real-Time Inventory Tracking",
      description: "Monitor stock levels, locations, and movements across multiple warehouses with instant updates and alerts.",
      color: "orange"
    },
    {
      icon: Scan,
      title: "Barcode & QR Scanning",
      description: "Streamline operations with mobile barcode scanning for receiving, picking, and cycle counting.",
      color: "blue"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics & Reports",
      description: "Make data-driven decisions with comprehensive reporting on inventory turnover, trends, and forecasting.",
      color: "orange"
    },
    {
      icon: Truck,
      title: "Order Management",
      description: "Seamlessly manage purchase orders, sales orders, and fulfillment from a single platform.",
      color: "blue"
    },
    {
      icon: AlertTriangle,
      title: "Low Stock Alerts",
      description: "Never run out of critical items with automated reorder points and smart notifications.",
      color: "orange"
    },
    {
      icon: MapPin,
      title: "Multi-Location Support",
      description: "Manage inventory across multiple warehouses, stores, and locations with centralized control.",
      color: "blue"
    }
  ];

  const additionalFeatures = [
    { icon: Cloud, title: "Cloud-Based Access", description: "Access your inventory from anywhere, anytime" },
    { icon: Smartphone, title: "Mobile App", description: "Full mobile functionality for on-the-go management" },
    { icon: Shield, title: "Secure & Reliable", description: "Enterprise-grade security and 99.9% uptime" },
    { icon: Users, title: "Team Collaboration", description: "Role-based access and team management tools" },
    { icon: Settings, title: "Custom Workflows", description: "Tailor the system to match your business processes" },
    { icon: Zap, title: "API Integration", description: "Connect with your existing business tools seamlessly" },
    { icon: TrendingUp, title: "Demand Forecasting", description: "Predict future inventory needs with AI insights" },
    { icon: CheckCircle, title: "Quality Control", description: "Track product quality and manage returns efficiently" }
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
            Everything you need to streamline your inventory operations, reduce costs, and boost efficiency in one comprehensive platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {mainFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            const isOrange = feature.color === "orange";
            
            return (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 rounded-2xl ${isOrange ? 'bg-orange-100' : 'bg-blue-100'} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className={`w-8 h-8 ${isOrange ? 'text-orange-500' : 'text-blue-600'}`} />
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