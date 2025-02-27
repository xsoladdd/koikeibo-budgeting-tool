export const navItems = [
  {
    name: "Budget",
    href: "/",
    roleAccess: ["*"],
  },
  {
    name: "Recents",
    href: "/",
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
  {
    name: "Login",
    id: "login-btn",
    roleAccess: ["*"],
  },
];
