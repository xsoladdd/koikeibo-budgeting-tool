import { cartItemType } from "../context/useFoodContext";

// start time is 8:30 AM and end time is in "HH:mm" format
export const generateTimeSlots = (startTime: string, endTime: string) => {
  const slots: string[] = [];
  const [startHour, startMinute] = startTime.split(":").map(Number);
  const [endHour, endMinute] = endTime.split(":").map(Number);
  const now = new Date();
  let currentSlot = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    startHour,
    startMinute
  );

  // Skip past slots
  while (currentSlot <= now) {
    currentSlot.setMinutes(currentSlot.getMinutes() + 15);
  }

  while (
    currentSlot.getHours() < endHour ||
    (currentSlot.getHours() === endHour &&
      currentSlot.getMinutes() <= endMinute)
  ) {
    slots.push(
      currentSlot.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })
    );
    currentSlot.setMinutes(currentSlot.getMinutes() + 15);
  }
  return slots;
};

export const calculateTotal = (cart: cartItemType[]) => {
  return cart.reduce((sum, item) => sum + item.meal.price * item.quantity, 0);
};
