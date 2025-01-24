import { create } from "zustand";

interface State {
  exampleState: boolean;
  toggleState: () => void;
}

const useStore = create<State>((set) => ({
  exampleState: false,
  toggleState: () => set((state) => ({ exampleState: !state.exampleState }))
}));

export default useStore;
