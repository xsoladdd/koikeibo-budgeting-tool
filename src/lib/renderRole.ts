import { ROLES } from "@/var";

export const renderRole = (v: string): string => {
  return ROLES.find((r) => r.value === v)?.label || "";
};
