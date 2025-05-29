"use client";
import React from "react";
import Link from "next/link";
import {
  ChevronDown,
  ChevronRight,
  Menu,
  Download,
  DollarSign,
  Package,
  Users,
  FileText,
  Receipt,
  Settings,
} from "lucide-react";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
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
import { desc, div } from "framer-motion/client";
import { useRouter } from "next/navigation";

const featuresData = [
  {
    title: "Income & Expense Tracking",
    icon: DollarSign,
    color: "text-green-600",
  },
  {
    title: "Stock Management",
    icon: Package,
    color: "text-blue-600",
  },
  {
    title: "Employee Management",
    icon: Users,
    color: "text-purple-600",
  },
  {
    title: "Order Processing",
    icon: FileText,
    color: "text-orange-600",
  },
  {
    title: "Billing & Invoicing",
    icon: Receipt,
    color: "text-red-600",
  },
  {
    title: "Custom Features",
    icon: Settings,
    color: "text-gray-600",
  },
];

// ssa
const solutionsData = [
  {
    title: "Restaurant Management",
    description: "Complete solution for restaurants and cafes",
    icon: "🍽️",
    href: "/solutions/restaurant",
  },
  {
    title: "Retail Inventory",
    description: "Perfect for retail stores and shops",
    icon: "🏪",
    href: "/solutions/retail",
  },
  {
    title: "Warehouse Management",
    description: "Large-scale warehouse operations",
    icon: "🏭",
    href: "/solutions/warehouse",
  },
  {
    title: "E-commerce Integration",
    description: "Sync with your online store",
    icon: "🛒",
    href: "/solutions/ecommerce",
  },
  {
    title: "Manufacturing",
    description: "Production and assembly management",
    icon: "⚙️",
    href: "/solutions/manufacturing",
  },
  {
    title: "Distribution",
    description: "Multi-location distribution networks",
    icon: "🚚",
    href: "/solutions/distribution",
  },
];

const AppDrawer = () => {
  const [featuresOpen, setFeaturesOpen] = React.useState(false);
  const [solutionsOpen, setSolutionsOpen] = React.useState(false);
  const [integrationsOpen, setIntegrationsOpen] = React.useState(false);
  const [resourcesOpen, setResourcesOpen] = React.useState(false);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" className="md:hidden p-2">
          <Menu className="h-6 w-6 text-gray-700" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[340px] overflow-y-auto">
        <SheetHeader className="border-b pb-4">
          <SheetTitle className="flex items-center gap-2 text-left">
            <div className="w-10 h-10 relative">
              <Image
                src="/logo.png"
                alt="Inventory Eats Logo"
                fill
                className="absolute object-contain"
              />
            </div>
            <span className="text-xl font-bold text-orange-500">
              Inventory Eats
            </span>
          </SheetTitle>
        </SheetHeader>

        <div className="mt-6 space-y-2">
          {/* Features Collapsible */}
          <Collapsible open={featuresOpen} onOpenChange={setFeaturesOpen}>
            <CollapsibleTrigger className="flex items-center justify-between w-full p-3 text-left hover:bg-gray-100 rounded-md">
              <span className="font-medium text-orange-600">Features</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform ${
                  featuresOpen ? "rotate-180" : ""
                }`}
              />
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-1 mt-2 ml-2">
              {featuresData.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <a
                    key={index}
                    href="#"
                    className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-md"
                  >
                    <IconComponent className={`h-4 w-4 ${feature.color}`} />
                    <span className="font-medium text-sm text-gray-700">
                      {feature.title}
                    </span>
                  </a>
                );
              })}
            </CollapsibleContent>
          </Collapsible>

          <Collapsible open={solutionsOpen} onOpenChange={setSolutionsOpen}>
            <CollapsibleTrigger className="flex items-center justify-between w-full p-3 text-left hover:bg-gray-100 rounded-md">
              <span className="font-medium">Solutions</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform ${
                  solutionsOpen ? "rotate-180" : ""
                }`}
              />
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-2 mt-2 ml-2">
              {solutionsData.map((solution, index) => (
                <a
                  key={index}
                  href={solution.href}
                  className="flex items-start gap-3 p-2 hover:bg-gray-50 rounded-md"
                >
                  <span className="text-base">{solution.icon}</span>
                  <div>
                    <h4 className="font-medium text-sm">{solution.title}</h4>
                    <p className="text-xs text-gray-600">
                      {solution.description}
                    </p>
                  </div>
                </a>
              ))}
            </CollapsibleContent>
          </Collapsible>

          <a
            href="/pricing"
            className="flex items-center p-3 text-sm font-medium hover:bg-gray-100 rounded-md"
          >
            <span className="text-lg mr-3">💰</span>
            Pricing
          </a>

          <a
            href="/customers"
            className="flex items-center p-3 text-sm font-medium hover:bg-gray-100 rounded-md"
          >
            <span className="text-lg mr-3">👥</span>
            Customers
          </a>

          <div className="space-y-2 pt-4 border-t">
            <a
              href="/login"
              className="flex items-center p-3 text-sm font-medium hover:bg-gray-100 rounded-md"
            >
              Login
            </a>

            <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-medium">
              Start Free Trail
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

const InventoryNavbar = () => {
  const router = useRouter();
  const handleFeatureClick = (label: string) => {
    const slug = label
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");

    router.push(`/features/${slug}`);
  };

  return (
    <div className="w-full">
      <div className="bg-gray-800 text-white text-center py-2 px-4 flex justify-center items-center gap-2">
        <span className="text-sm">Launching Sale: Book your demo Today</span>
        <ChevronRight className="h-3 w-3" />
      </div>

      <nav className="bg-white border-b border-gray-200 px-6 py-4 shadow relative z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <AppDrawer />
            <Link href={"/"} className="flex items-center gap-2">
              <div className="w-16 h-14 relative">
                <Image
                  src="/logo.png"
                  alt="company_logo"
                  fill
                  className="absolute object-contain"
                />
              </div>
              <span className="text-2xl font-bold text-orange-500">
                Inventory Eats
              </span>
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            <NavigationMenu>
              <NavigationMenuList className="space-x-7">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="px-0 text-sm font-medium text-gray-700 hover:text-orange-600">
                    <Link href="/features">Features</Link>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white">
                    <NavigationMenuLink className="block w-[260px] p-4 ">
                      <div className="space-y-1">
                        {featuresData.map((feature, index) => {
                          const IconComponent = feature.icon;
                          return (
                            // <a
                            //   key={index}
                            //   href="#"
                            //   className="flex items-center gap-3 p-2 hover:underline rounded-md transition-colors"
                            // >
                            //   <span className="font-medium text-sm text-gray-700">
                            //     {feature.title}
                            //   </span>
                            // </a>
                            <div
                              key={index}
                              onClick={() => handleFeatureClick(feature.title)}
                              className="flex cursor-pointer items-center gap-3 p-2 hover:underline rounded-md transition-colors"
                            >
                              <span className="font-medium text-sm text-gray-700">
                                {feature.title}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <a
              href="/entrprise"
              className=" text-sm font-medium text-gray-700 hover:text-orange-600"
            >
              Entrprise
            </a>
            <a
              href="/customers"
              className=" text-sm font-medium text-gray-700 hover:text-orange-600"
            >
              Customers
            </a>

            <a
              href="/pricing"
              className=" text-sm font-medium text-gray-700 hover:text-orange-600"
            >
              Contact Us
            </a>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <a
              href="/search"
              className="hidden md:flex items-center text-gray-500 hover:text-gray-700"
            ></a>

            <a href="/login" className="hidden md:block text-sm font-medium ">
              Login
            </a>

            <Button className="bg-orange-500 hover:bg-orange-600  cursor-pointer  text-white px-4 py-2 text-sm font-medium">
              Start Free Trail
            </Button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default InventoryNavbar;
