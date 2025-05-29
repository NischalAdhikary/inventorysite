"use client";

import { useParams } from "next/navigation";
import FeaturePage from "./components/Featurepage";

import InventoryNavbar from "@/components/navbar";
import Footer from "@/components/footer";
type FeatureSlug =
  | "income-expense-tracking"
  | "stock-management"
  | "employee-management"
  | "order-processing"
  | "billing-invoicing"
  | "custom-features";

type FeatureKey =
  | "incomeExpense"
  | "stockManagement"
  | "employeeManagement"
  | "orderProcessing"
  | "billing"
  | "customization";

const featureMapping: Record<FeatureSlug, FeatureKey> = {
  "income-expense-tracking": "incomeExpense",
  "stock-management": "stockManagement",
  "employee-management": "employeeManagement",
  "order-processing": "orderProcessing",
  "billing-invoicing": "billing",
  "custom-features": "customization",
};

export default function FeatureDetailPage() {
  const params = useParams();
  const slug = params?.slug as FeatureSlug;

  const featureKey = featureMapping[slug];

  if (!featureKey) {
    return <div>Feature not found</div>;
  }

  return (
    <div>
      <InventoryNavbar />
      <FeaturePage featureKey={featureKey} />
      <Footer />
    </div>
  );
}
