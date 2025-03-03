"use client";
import React, { ReactNode, useEffect } from "react";
import Nav from "./Components/Nav";
import { usePopulateStore } from "../hooks/usePopulateStore";
import clsx from "clsx";
import { Toaster } from "@/components/CustomToaster";
import { useSession } from "next-auth/react";
import bg from "../../assets/bg.gif";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  usePopulateStore();
  const x = useSession();
  useEffect(() => {
    if (x.status === "unauthenticated") {
      window.location.href = "/login";
    }
    return () => {};
  }, [x]);

  return (
    <div className="">
      <Nav />
      <main className={clsx(`px-2 md:px-24 pt-4 min-h-screen `)}>
        {children}

        <style jsx global>{`
          body {
            background-image: url(${bg.src});
            background-size: cover;
            background-repeat: no-repeat;
            background-attachment: fixed;
          }
        `}</style>
      </main>
      <Toaster />
    </div>
  );
};

export default DashboardLayout;
