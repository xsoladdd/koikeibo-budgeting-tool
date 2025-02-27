"use client";

import { useAuthGuard } from "@/app/hooks/useAuthGuard";
import { useGlobalContext } from "@/app/useGlobalContext";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { Menu, X } from "lucide-react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { navItems } from "../res";
import NewPasswordDialog from "./NewPasswordDialog";
import logo from "../../../assets/logo.png";

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
      <nav className=" shadow-md  text-black ">
        <div className="px-2 lg:px-24 mx-auto ">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0 flex items-center">
                <img src={logo.src} alt="Logo" className="h-12 w-auto" />
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
                    {item.href ? (
                      <Link
                        href={item.href}
                        className={clsx(
                          `text-black  block px-3 py-2 rounded-md text-base font-medium text-nowrap`,
                          item.href === pathname && "text-black font-extrabold"
                        )}
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <Button
                        className={clsx(
                          "text-black block px-3 py-2 rounded-md text-base font-medium",
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
            <div className="flex items-center  text-black lg:hidden">
              <Button
                variant="ghost"
                className=" text-black bg-transparent"
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
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="text-black hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <Button
                      className={clsx(
                        "text-black block px-3 py-2 rounded-md text-base font-medium ",
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
