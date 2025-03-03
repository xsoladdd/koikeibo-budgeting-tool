export const navItems = [
  {
    name: "Budget",
    href: "/",
    roleAccess: ["*"],
  },
  {
    name: "Recents",
    href: "/recents",
    roleAccess: ["*"],
  },
  {
    name: "Accounts",
    href: "/accounts",
    roleAccess: ["BACKDOOR_ADMIN"],
  },
  {
    name: "Logout",
    id: "logout-btn",
    roleAccess: ["*"],
  },
];
