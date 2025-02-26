"use client";
import React, { ReactNode } from "react";
import Nav from "./Components/Nav";
import { usePopulateStore } from "../hooks/usePopulateStore";
import { GetServerSideProps, Metadata } from "next";
import { usePathname } from "next/navigation";
import clsx from "clsx";
interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  usePopulateStore();
  const pathName = usePathname();
  return (
    <div>
      <Nav />
      <main
        className={clsx(
          `px-2 md:px-24 pt-4 bg-[#F2F8BF] min-h-screen`
          // pathName === "/" && ``
        )}
      >
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
