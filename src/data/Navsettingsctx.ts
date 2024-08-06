import { Navopt } from "./Navctx";
import { invoke } from "@tauri-apps/api";
import { emit } from "@tauri-apps/api/event";


const addFontSize = async () => {
    await invoke('add_font_size');
    await emit('font_size_change');
}

const decreaseFontSize = async () => {
    await invoke('decrease_font_size');
    await emit('font_size_change');
}

export const SettingsOpts: Navopt[] = [
    {
        name: "Add font size",
        onClick: addFontSize
    },
    {
        name: "Decrease font size",
        onClick: decreaseFontSize
    }
]