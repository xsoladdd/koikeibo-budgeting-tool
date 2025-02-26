"use client";

import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const OrderItemSkeleton: React.FC = () => {
  return (
    <Card className="w-full max-w-[400px] min-h-[250px]">
      <Skeleton className="w-full h-full" />
    </Card>
  );
};

export default OrderItemSkeleton;
