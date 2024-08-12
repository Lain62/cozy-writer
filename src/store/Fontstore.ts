import { create } from 'zustand';

interface fontState {
  fontSize: number,
  increaseFontSize: () => void,
  decreaseFontSize: () => void,
  setFontSize: (size: number) => void
};

export const useFontStore = create<fontState>((set) => ({
  fontSize: 16,
  increaseFontSize: () => set((state: any) => ({ fontSize: state.fontSize + 1 })),
  decreaseFontSize: () => set((state: any) => ({ fontSize: state.fontSize - 1 })),
  setFontSize: (size: number) => set(() => ({ fontSize: size }))
}))
