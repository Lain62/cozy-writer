import { create } from 'zustand';

interface projectState {
  projectName: string,
  setProjectName: (name: string) => void,
  openedProject: string,
  setOpenedProjectName: (name: string) => void,
  openedText: string,
  setOpenedText: (text: string) => void,
  openedFile: string,
  setOpenedFile: (text: string) => void
};

export const useProjectStore = create<projectState>((set) => ({
  projectName: "",
  setProjectName: (name: string) => set(() => ({ projectName: name })),
  openedProject: "",
  setOpenedProjectName: (name: string) => set(() => ({ openedProject: name })),
  openedFile: "",
  setOpenedFile: (text: string) => set(() => ({ openedFile: text })),
  openedText: "",
  setOpenedText: (text: string) => set(() => ({ openedText: text })),
}))
