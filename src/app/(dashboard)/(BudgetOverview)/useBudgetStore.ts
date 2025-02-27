import { create } from "zustand";
import { recordType } from "./helper";
import { EntryFragmentFragment } from "@/graphql/generated";

type settingsForm = {
  monthlyIncome: number;
  needsPercentage: number;
  wantsPercentage: number;
  culturePercentage: number;
  extraPercentage: number;
  savingsPercentage: number;
};

type settingsFormKey = keyof settingsForm;

interface BudgetState {
  budget: number;
  setBudget: (budget: number) => void;
  editNewDialogStatus: boolean;
  setEditNewDialogStatus: (status: boolean) => void;
  record?: recordType;
  setRecord: (r?: recordType) => void;
  settingsForm: settingsForm;
  setSettingsForm: (settings: settingsForm) => void;
  setSettingInput: (key: settingsFormKey, value: number) => void;
  resetSettingForm: () => void;
  recordLoading: boolean;
  setRecordLoading: (loading: boolean) => void;
  activeEdit: { type: string; id: number };
  setActiveEdit: (type: string, id: number) => void;
  resetActiveEdit: () => void;
  isReviewDialogOpen: boolean;
  setIsReviewDialogOpen: (status: boolean) => void;
}

const defaultSettingsForm = {
  monthlyIncome: 0,
  needsPercentage: 0,
  wantsPercentage: 0,
  culturePercentage: 0,
  extraPercentage: 0,
  savingsPercentage: 0,
};

const defaultActiveEdit = { type: "", id: 0 };

const useBudgetStore = create<BudgetState>((set) => ({
  budget: 0,
  setBudget: (budget) => set({ budget }),
  editNewDialogStatus: false,
  setEditNewDialogStatus: (status) => set({ editNewDialogStatus: status }),
  record: undefined,
  setRecord: (r) => set({ record: r }),
  settingsForm: defaultSettingsForm,
  setSettingsForm: (settings) => set({ settingsForm: settings }),
  setSettingInput: (key, value) =>
    set((state) => ({
      settingsForm: { ...state.settingsForm, [key]: value },
    })),
  resetSettingForm: () => set({ settingsForm: defaultSettingsForm }),
  recordLoading: true,
  setRecordLoading: (loading) => set({ recordLoading: loading }),
  activeEdit: defaultActiveEdit,
  setActiveEdit: (type, id) => set({ activeEdit: { type, id } }),
  resetActiveEdit: () => set({ activeEdit: defaultActiveEdit }),
  isReviewDialogOpen: false,
  setIsReviewDialogOpen: (status) => set({ isReviewDialogOpen: status }),
}));

export default useBudgetStore;
