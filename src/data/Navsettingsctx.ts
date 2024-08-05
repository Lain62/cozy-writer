import { Navopt } from "./Navctx";
import { invoke } from "@tauri-apps/api";


const addFontSize = async () => {
    await invoke('add_font_size');
}

export const SettingsOpts: Navopt[] = [
    {
        name: "Add font size",
        onClick: addFontSize
    }
]