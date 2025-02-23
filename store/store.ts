/* eslint-disable no-unused-vars */
import { create } from "zustand";

interface StoreState {
  isActive: boolean;
  setIsActive: (isActive: boolean) => void;
}

const useStore = create<StoreState>((set) => ({
  // set dùng để cập nhật state của store
  isActive: false,
  setIsActive: (isActive) => set({ isActive })
}));

export default useStore;
