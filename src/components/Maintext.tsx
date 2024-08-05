import { invoke } from "@tauri-apps/api"
import { useEffect, useState } from "react";

function Maintext() {
    const [fontSize, setFontSize] = useState<any>(0)
    const getFontSize = async () => await invoke('get_font_size')
    
    useEffect(() => {
        getFontSize().then(val => { setFontSize(val) });
        console.log(getFontSize())
    })

    return (
        <textarea style={{ fontSize: fontSize }} className=" p-2 w-3/4 h-[calc(100vh-2.5rem)] resize-none focus:border-none focus:outline-none bg-gray-900 text-white" />
    )
}

export default Maintext