import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

export const LoadingState = () => (
  <div className="space-y-4">
    <Skeleton className="h-10 w-full" />
    <Skeleton className="h-10 w-full" />
    <Skeleton className="h-10 w-full" />
    <Skeleton className="h-10 w-full" />
  </div>
);

export const EmptyState = () => (
  <div className="text-center py-10">
    <h3 className="mt-2 text-sm font-semibold text-gray-900">No Account</h3>
    <p className="mt-1 text-sm text-gray-500">
      No Account/s found in the system.
    </p>
    {/* <div className="mt-6">
      <Button>Add user</Button>
    </div> */}
  </div>
);
