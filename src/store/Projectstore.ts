import { create } from 'zustand';

interface projectState {
  projectName: string,
  setProjectName: (name: string) => void,
  openedProject: string,
  setOpenedProjectName: (name: string) => void
};

export const useProjectStore = create<projectState>((set) => ({
  projectName: "",
  setProjectName: (name: string) => set(() => ({ projectName: name })),
  openedProject: "",
  setOpenedProjectName: (name: string) => set(() => ({ openedProject: name })),
}))
