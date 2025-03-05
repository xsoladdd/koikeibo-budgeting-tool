export const renderType = (type?: string) => {
  if (!type) return "";
  return type.toLowerCase() === "extra" ? "Unplanned" : type;
};
