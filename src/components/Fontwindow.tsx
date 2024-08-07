import { closeFontWindow, addFontSize, decreaseFontSize, getFontSize, setFontSize } from "../data/Fontwindowhelper";
import { useState, useEffect } from "react";
import { listen } from "@tauri-apps/api/event";

function Fontwindow() {
    const [fontValue, setFontValue] = useState<any>(0);
    const listen_font_size_changes = async () => await listen('font_size_change', () => {
        getFontSize().then(val => { setFontValue(val) });
    });

    useEffect(() => {
        getFontSize().then(val => setFontValue(val));
        listen_font_size_changes();
    }, [])

    return (
        <div className="bg-black/50 w-screen h-screen absolute flex justify-center items-center">
            <div className="bg-gray-200 w-96 h-96 rounded-lg ">
                <div className="w-full flex justify-center p-4 border-b-2 border-solid border-gray-300">
                    <h2 className="flex-grow text-left text-xl font-semibold "> Font Settings </h2>
                    <button onClick={closeFontWindow} className="flex-shrink bg-gray-500 text-blue-50 font-semibold rounded px-2">X</button>
                </div>
                <div className="px-8 mt-4">
                    <div className="flex justify-between">
                        <p className="text-lg">Change Size</p>
                        <div className="border-2 border-solid border-gray-400 rounded-lg">
                            <button onClick={decreaseFontSize} className=" w-8 text-lg font-bold bg-gray-200 px-2 border-r-2 border-gray-400 rounded-tl-lg rounded-bl-lg">-</button>
                            <input onKeyDown={e => { if (e.key == "Enter") setFontSize(Number(e.currentTarget.value)) }} pattern="[0-9*]" onBlur={e => setFontSize(Number(e.target.value))} onChange={e => setFontValue(e.target.value.replace(/\D/, ''))} className="w-8 text-center bg-gray-100" value={fontValue} />
                            <button onClick={addFontSize} className=" w-8 text-lg font-bold bg-gray-200 px-2 border-l-2 border-gray-400 rounded-tr-lg rounded-br-lg">+</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
};

export default Fontwindow;