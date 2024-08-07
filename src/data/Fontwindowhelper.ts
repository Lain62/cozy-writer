import { invoke } from "@tauri-apps/api";

export async function closeFontWindow() {
    await invoke("close_font_window");
}

export const addFontSize = async () => {
    await invoke('add_font_size');
}

export const decreaseFontSize = async () => {
    await invoke('decrease_font_size');
}

export const getFontSize = async () => await invoke('get_font_size');

export async function setFontSize(size: number) {
    await invoke("set_font_size", { size: size })
}