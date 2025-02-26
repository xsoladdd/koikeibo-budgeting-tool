export const navItems = [
  {
    name: "Food Menu",
    href: "/",
    roleAccess: ["*"],
  },
  {
    name: "Manage Menu",
    href: "/manage-menu",
    roleAccess: ["BACKDOOR_ADMIN", "C_STAFF"],
  },
  {
    name: "Cart",
    href: "/cart",
    roleAccess: ["BACKDOOR_ADMIN", "USER"],
  },

  {
    name: "Manage Orders",
    href: "/manage-orders",
    roleAccess: ["BACKDOOR_ADMIN", "C_STAFF"],
  },
  {
    name: "My Orders",
    href: "/my-orders",
    roleAccess: ["BACKDOOR_ADMIN", "USER"],
  },
  {
    name: "Accounts",
    href: "/accounts",
    roleAccess: ["BACKDOOR_ADMIN"],
  },
  {
    name: "Menu",
    href: "#",
    dropdownItems: [
      { name: "Breakfast", href: "#breakfast" },
      { name: "Lunch", href: "#lunch" },
      { name: "Dinner", href: "#dinner" },
    ],
  },
  {
    name: "Orders",
    href: "/orders",
    roleAccess: ["BACKDOOR_ADMIN", "C_STAFF"],
  },
  {
    name: "Logout",
    id: "logout-btn",
    roleAccess: ["BACKDOOR_ADMIN", "C_STAFF", "USER"],
  },
  {
    name: "Login",
    id: "login-btn",
    roleAccess: ["*"],
  },
];
