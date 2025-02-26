"use client";
import { usePathname, useRouter } from "next/navigation";
import { navItems } from "../(dashboard)/res";
import { useGlobalContext } from "../useGlobalContext";

const allowAccess = (pathname: string) => {
  return navItems.find((item) => item.href === pathname)?.roleAccess;
};

export const useAuthGuard = () => {
  const { user } = useGlobalContext();
  const pathname = usePathname();
  const { push } = useRouter();
  if (user) {
    const accessList = allowAccess(pathname);
    if (accessList?.includes("*")) {
      return;
    }
    if (!allowAccess(pathname)?.includes(user.role)) {
      console.log("aw");
      push("/404");
    }
    return;
  }
};
