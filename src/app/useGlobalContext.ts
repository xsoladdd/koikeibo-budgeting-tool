import { GetUserListQuery } from "@/graphql/generated";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type user = GetUserListQuery["users"][0];

interface GlobalState {
  user: user | null;
  setUser: (user: user) => void;
  resetUser: () => void;
}

export const useGlobalContext = create<GlobalState>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      resetUser: () => set({ user: null }),
    }),
    {
      name: "global-storage", // unique name
    }
  )
);
