import React, { ReactNode } from "react";
import { Toaster } from "@/components/ui/toaster";
interface IToastProviderProps {
  children: ReactNode;
}

const ToastProvider: React.FC<IToastProviderProps> = ({ children }) => {
  return (
    <>
      {children}
      <Toaster />
    </>
  );
};

export default ToastProvider;
