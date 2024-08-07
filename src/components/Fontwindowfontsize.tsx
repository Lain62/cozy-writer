import { decreaseFontSize, addFontSize, setFontSize, getFontSize } from "../data/Fontwindowhelper"
import { useState, useEffect } from "react";
import { listen } from "@tauri-apps/api/event";

function Fontwindowfontsize() {
    const [fontValue, setFontValue] = useState<any>(0);
    const listen_font_size_changes = async () => await listen('font_size_change', () => {
        getFontSize().then(val => { setFontValue(val) });
    });

    useEffect(() => {
        getFontSize().then(val => setFontValue(val));
        listen_font_size_changes();
    }, [])

    return (
        <div className="flex justify-between">
            <p className="text-lg">Change Size</p>
            <div className="border-2 border-solid border-gray-400 rounded-lg">
                <button onClick={decreaseFontSize} className=" w-8 text-lg font-bold bg-gray-200 px-2 border-r-2 border-gray-400 rounded-tl-lg rounded-bl-lg">-</button>
                <input onKeyDown={e => { if (e.key == "Enter") setFontSize(Number(e.currentTarget.value)) }} pattern="[0-9*]" onBlur={e => setFontSize(Number(e.target.value))} onChange={e => setFontValue(e.target.value.replace(/\D/, ''))} className="w-8 text-center bg-gray-100" value={fontValue} />
                <button onClick={addFontSize} className=" w-8 text-lg font-bold bg-gray-200 px-2 border-l-2 border-gray-400 rounded-tr-lg rounded-br-lg">+</button>
            </div>
        </div>

    )
}

export default Fontwindowfontsize