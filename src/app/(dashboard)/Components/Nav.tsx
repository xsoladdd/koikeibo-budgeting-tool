"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import clsx from "clsx";
import { useGlobalContext } from "@/app/useGlobalContext";
import { renderRole } from "@/lib/renderRole";
import { navItems } from "../res";
import { useAuthGuard } from "@/app/hooks/useAuthGuard";
import NewPasswordDialog from "./NewPasswordDialog";
function Nav() {
  const { replace } = useRouter();
  const { user } = useGlobalContext();
  const pathname = usePathname();
  const role = user?.role!;
  const hasUser = !!user?.id;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useAuthGuard();

  useEffect(() => {
    setIsMobileMenuOpen(false);

    return () => {};
  }, [pathname]);

  const handleLogout = () => signOut({ redirectTo: "/login" });

  return (
    <>
      <NewPasswordDialog />
      <nav className=" shadow-md !bg-rose-600 text-white">
        <div className="px-2 lg:px-24 mx-auto ">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0 flex items-center">
                <span className="text-lg md:text-xl font-bold text-white">
                  Campus
                </span>
                <span className="text-lg md:text-xl font-bold text-white">
                  Crave
                </span>
                {/* <span className="text-lg md:text-xl font-bold text-white">
                  {renderRole(role)
                    ? ` ${
                        renderRole(role).toLowerCase() === "user"
                          ? ""
                          : `(${renderRole(role)})`
                      }`
                    : ""}
                </span> */}
              </Link>
            </div>
            <div className="hidden lg:ml-6 lg:flex lg:items-center">
              {navItems
                .filter(
                  ({ roleAccess }) =>
                    roleAccess?.includes(role) || roleAccess?.includes("*")
                )
                .map((item) => (
                  <div key={item.name} className="ml-3 relative">
                    {item.dropdownItems ? (
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="link"
                            className="inline-flex items-center text-gray-600 hover:text-gray-900  px-3 py-2 rounded-md text-base font-medium"
                          >
                            {item.name}
                            <ChevronDown className="ml-1 h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          {item.dropdownItems.map((dropdownItem) => (
                            <DropdownMenuItem key={dropdownItem.name} asChild>
                              <Link href={dropdownItem.href}>
                                {dropdownItem.name}
                              </Link>
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    ) : item.href ? (
                      <Link
                        href={item.href}
                        className={clsx(
                          `text-white hover:text-rose-50 block px-3 py-2 rounded-md text-base font-medium text-nowrap`,
                          item.href === pathname && "text-white font-extrabold"
                        )}
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <Button
                        className={clsx(
                          "text-white block px-3 py-2 rounded-md text-base font-medium",
                          item.id === "login-btn" && hasUser && "hidden"
                        )}
                        variant={"link"}
                        onClick={() => {
                          if (item.id === "login-btn") replace("/login");
                          if (item.id === "logout-btn") handleLogout();
                        }}
                      >
                        {item.name}
                      </Button>
                    )}
                  </div>
                ))}
            </div>
            <div className="flex items-center  text-white lg:hidden">
              <Button
                variant="ghost"
                className=" text-white bg-transparent"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="h-6 w-6" aria-hidden="true" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <div className={`lg:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems
              .filter(
                ({ roleAccess }) =>
                  roleAccess?.includes(role) || roleAccess?.includes("*")
              )
              .map((item) => (
                <div key={item.name} className="block">
                  {item.dropdownItems ? (
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="link" className="w-full justify-start">
                          {item.name}
                          <ChevronDown className="ml-1 h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        {item.dropdownItems.map((dropdownItem) => (
                          <DropdownMenuItem key={dropdownItem.name} asChild>
                            <Link href={dropdownItem.href}>
                              {dropdownItem.name}
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : item.href ? (
                    <Link
                      href={item.href}
                      className="text-white hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <Button
                      className={clsx(
                        "text-white block px-3 py-2 rounded-md text-base font-medium ",
                        item.id === "login-btn" && hasUser && "hidden"
                      )}
                      variant="ghost"
                      onClick={() => {
                        if (item.id === "login-btn") replace("/login");
                        if (item.id === "logout-btn") handleLogout();
                      }}
                    >
                      {item.name}
                    </Button>
                  )}
                </div>
              ))}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
