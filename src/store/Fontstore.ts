import { create } from 'zustand';

export const useFontStore = create((set) => ({
  fontSize: 16,
  increaseFontSize: () => set((state) => ({ fontSize: state.fontSize + 1})),
  decreaseFontSize: () => set((state) => ({ fontSize: state.fontSize - 1})),
  setFontSize: (size: number) => set(() => ({ fontSize: size })),
}))
