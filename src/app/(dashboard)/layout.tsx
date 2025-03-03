"use client";
import React, { ReactNode, useEffect } from "react";
import Nav from "./Components/Nav";
import { usePopulateStore } from "../hooks/usePopulateStore";
import { GetServerSideProps, Metadata } from "next";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Toaster } from "@/components/CustomToaster";
import { useGlobalContext } from "../useGlobalContext";
import { isClientSide } from "@/lib/isClientSide";
import { useSession } from "next-auth/react";
interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  usePopulateStore();
  const pathName = usePathname();
  const { user } = useGlobalContext();
  const x = useSession();
  useEffect(() => {
    console.log(x);
    if (x.status === "unauthenticated") {
      console.log(`Logout here`);
      // if (isClientSide()) {
      window.location.href = "/login";
      // }
    }
    return () => {};
  }, [x]);

  return (
    <div>
      <Nav />
      <main className={clsx(`px-2 md:px-24 pt-4 min-h-screen `)}>
        {children}
      </main>
      <Toaster />
    </div>
  );
};

export default DashboardLayout;
