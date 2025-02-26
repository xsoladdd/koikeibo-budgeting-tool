import { LoaderCircle } from "lucide-react";
import React from "react";

const PageLoading: React.FC = () => {
  return (
    <>
      <div className="w-full">
        <div className="flex justify-center h-screen mt-24">
          <LoaderCircle className="animate-spin" width={50} height={50} />
        </div>
      </div>
    </>
  );
};
export default PageLoading;
