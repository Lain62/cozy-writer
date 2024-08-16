import { useFontStore } from '../store/Fontstore';
import { useState, useEffect } from 'react';
import { useProjectStore } from '../store/Projectstore';

function Maintext() {
    const getFontSize = useFontStore((state) => state.fontSize);
    const [text, setText] = useState<string>("");
    const getOpenedFile = useProjectStore(state => state.openedFile)
    const getText = useProjectStore(state => state.openedText)

    useEffect(() => {
        console.log(getText)
        setText(getText)
    }, [getOpenedFile])


    return (
        <textarea value={text} onChange={e => setText(e.target.value)} style={{ fontSize: getFontSize }} className=" p-2 w-3/4 h-screen resize-none focus:border-none focus:outline-none bg-gray-900 text-white" />
    )
}

export default Maintext
