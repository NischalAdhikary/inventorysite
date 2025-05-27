"use client"

import React from "react";
import { ChevronDown, Menu } from "lucide-react";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";

// Mock data for features and solutions
const featuresData = [
  {
    title: "Inventory Tracking",
    description: "Real-time inventory monitoring and alerts",
    icon: "📦",
    href: "/features/inventory-tracking"
  },
  {
    title: "Order Management",
    description: "Streamline your order processing workflow",
    icon: "📋",
    href: "/features/order-management"
  },
  {
    title: "Analytics Dashboard",
    description: "Comprehensive insights and reporting",
    icon: "📊",
    href: "/features/analytics"
  },
  {
    title: "Mobile App",
    description: "Manage inventory on the go",
    icon: "📱",
    href: "/features/mobile"
  },
  {
    title: "Supplier Management",
    description: "Manage your supplier relationships",
    icon: "🤝",
    href: "/features/suppliers"
  },
  {
    title: "Automated Alerts",
    description: "Never run out of stock again",
    icon: "🔔",
    href: "/features/alerts"
  },
];

const solutionsData = [
  {
    title: "Restaurant Management",
    description: "Complete solution for restaurants and cafes",
    icon: "🍽️",
    href: "/solutions/restaurant"
  },
  {
    title: "Retail Inventory",
    description: "Perfect for retail stores and shops",
    icon: "🏪",
    href: "/solutions/retail"
  },
  {
    title: "Warehouse Management",
    description: "Large-scale warehouse operations",
    icon: "🏭",
    href: "/solutions/warehouse"
  },
  {
    title: "E-commerce Integration",
    description: "Sync with your online store",
    icon: "🛒",
    href: "/solutions/ecommerce"
  },
];

const AppDrawer = () => {
  const [featuresOpen, setFeaturesOpen] = React.useState(false);
  const [solutionsOpen, setSolutionsOpen] = React.useState(false);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" className="md:hidden p-2">
          <Menu className="h-6 w-6 text-gray-700" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[320px] sm:w-[400px] overflow-y-auto">
        <SheetHeader className="border-b pb-4">
          <SheetTitle className="flex items-center gap-2 text-left">
            <div className="w-10 h-10 relative">
              <Image
                src="/inventorylogo.png"
                alt="Inventory Eats Logo"
                fill
                className="absolute object-contain"
              />
            </div>
            <span className="text-xl font-bold text-orange-500">Inventory Eats</span>
          </SheetTitle>
          <SheetDescription className="text-left">
            Navigate through our features and solutions
          </SheetDescription>
        </SheetHeader>
        
        <div className="mt-6 space-y-2">
          {/* Home Link */}
          <a 
            href="/" 
            className="flex items-center p-3 text-sm font-medium hover:bg-gray-100 rounded-md transition-colors"
          >
            <span className="text-lg mr-3">🏠</span>
            Home
          </a>

          {/* Features Collapsible */}
          <Collapsible open={featuresOpen} onOpenChange={setFeaturesOpen}>
            <CollapsibleTrigger className="flex items-center justify-between w-full p-3 text-left hover:bg-gray-100 rounded-md transition-colors">
              <div className="flex items-center">
                <span className="text-lg mr-3">⚡</span>
                <span className="font-medium">Features</span>
              </div>
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${featuresOpen ? 'rotate-180' : ''}`} />
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-1 mt-1 ml-4">
              {featuresData.map((feature, index) => (
                <a 
                  key={index} 
                  href={feature.href}
                  className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-md cursor-pointer border-l-2 border-transparent hover:border-orange-500 transition-all duration-200"
                >
                  <span className="text-lg flex-shrink-0">{feature.icon}</span>
                  <div className="min-w-0">
                    <h4 className="font-medium text-sm text-gray-900">{feature.title}</h4>
                    <p className="text-xs text-gray-600 mt-1 line-clamp-2">{feature.description}</p>
                  </div>
                </a>
              ))}
            </CollapsibleContent>
          </Collapsible>

          {/* Solutions Collapsible */}
          <Collapsible open={solutionsOpen} onOpenChange={setSolutionsOpen}>
            <CollapsibleTrigger className="flex items-center justify-between w-full p-3 text-left hover:bg-gray-100 rounded-md transition-colors">
              <div className="flex items-center">
                <span className="text-lg mr-3">🎯</span>
                <span className="font-medium">Solutions</span>
              </div>
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${solutionsOpen ? 'rotate-180' : ''}`} />
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-1 mt-1 ml-4">
              {solutionsData.map((solution, index) => (
                <a 
                  key={index}
                  href={solution.href}
                  className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-md cursor-pointer border-l-2 border-transparent hover:border-orange-500 transition-all duration-200"
                >
                  <span className="text-lg flex-shrink-0">{solution.icon}</span>
                  <div className="min-w-0">
                    <h4 className="font-medium text-sm text-gray-900">{solution.title}</h4>
                    <p className="text-xs text-gray-600 mt-1 line-clamp-2">{solution.description}</p>
                  </div>
                </a>
              ))}
            </CollapsibleContent>
          </Collapsible>

          {/* Direct Links */}
          <div className="space-y-1 pt-2 border-t">
            <a 
              href="/enterprise" 
              className="flex items-center p-3 text-sm font-medium hover:bg-gray-100 rounded-md transition-colors"
            >
              <span className="text-lg mr-3">🏢</span>
              Enterprise
            </a>
            <a 
              href="/pricing" 
              className="flex items-center p-3 text-sm font-medium hover:bg-gray-100 rounded-md transition-colors"
            >
              <span className="text-lg mr-3">💰</span>
              Pricing
            </a>
            <a 
              href="/resources" 
              className="flex items-center p-3 text-sm font-medium hover:bg-gray-100 rounded-md transition-colors"
            >
              <span className="text-lg mr-3">📚</span>
              Resources
            </a>
            <a 
              href="/support" 
              className="flex items-center p-3 text-sm font-medium hover:bg-gray-100 rounded-md transition-colors"
            >
              <span className="text-lg mr-3">🎧</span>
              Support
            </a>
          </div>

          {/* Authentication Section */}
          <div className="space-y-2 pt-4 border-t">
            <a 
              href="/login" 
              className="flex items-center p-3 text-sm font-medium hover:bg-gray-100 rounded-md transition-colors"
            >
              <span className="text-lg mr-3">🔐</span>
              Login
            </a>
            
            <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2.5 transition-colors duration-200">
              Start Free Trial
            </Button>
          </div>

          {/* Footer */}
          <div className="pt-6 pb-4 border-t mt-6">
            <div className="text-center">
              <p className="text-xs text-gray-500 mb-2">Need help?</p>
              <a 
                href="/contact" 
                className="text-xs text-orange-500 hover:text-orange-600 font-medium"
              >
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default AppDrawer;