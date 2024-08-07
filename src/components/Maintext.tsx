import { invoke } from "@tauri-apps/api"
import { listen } from "@tauri-apps/api/event";
import { useEffect, useState } from "react";

function Maintext() {
    const [fontSize, setFontSize] = useState<any>(0);
    const getFontSize = async () => await invoke('get_font_size');
    const unlisten = async () => await listen('font_size_change', () => {
        getFontSize().then(val => { setFontSize(val) });
    });

    useEffect(() => {
        getFontSize().then(val => { setFontSize(val) });
        unlisten();
    }, [])

    return (
        <textarea style={{ fontSize: fontSize }} className=" p-2 w-3/4 h-screen resize-none focus:border-none focus:outline-none bg-gray-900 text-white" />
    )
}

export default Maintext