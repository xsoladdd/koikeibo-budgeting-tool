function generateRandomId(length: number = 16): string {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = Date.now().toString(36); // Convert current timestamp to base-36 string
  while (result.length < length) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    result += chars[randomIndex];
  }
  return result.substring(0, length); // Ensure the result is exactly the specified length
}

export default generateRandomId;
