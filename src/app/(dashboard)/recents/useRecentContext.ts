import { create } from "zustand";
import { recordType } from "../(BudgetOverview)/helper";

interface RecentState {
  records?: recordType[];
  isRecordsLoading: boolean;
  setRecordsLoading: (status: boolean) => void;
  setRecords: (records: recordType[]) => void;
}

const useRecentStore = create<RecentState>((set) => ({
  records: [],
  isRecordsLoading: true,
  setRecordsLoading: (status) => set({ isRecordsLoading: status }),
  setRecords: (records) => set({ records }),
}));

export default useRecentStore;
