import { useFontStore } from '../store/Fontstore';

function Fontwindowfontsize() {
    const getFontSize = useFontStore((state) => state.fontSize);
    const setFontSize = useFontStore((state) => state.setFontSize);
    const increaseFontSize = useFontStore((state) => state.increaseFontSize);
    const decreaseFontSize = useFontStore((state) => state.decreaseFontSize);

    return (
        <div className="flex justify-between">
            <p className="text-lg">Change Size</p>
            <div className="border-2 border-solid border-gray-400 rounded-lg">
                <button onClick={decreaseFontSize} className=" w-8 text-lg font-bold bg-gray-200 px-2 border-r-2 border-gray-400 rounded-tl-lg rounded-bl-lg">-</button>
                <input onKeyDown={e => { if (e.key == "Enter") setFontSize(Number(e.currentTarget.value)) }} pattern="[0-9*]" onBlur={e => setFontSize(Number(e.target.value))} onChange={e => setFontSize(Number(e.target.value.replace(/\D/, '')))} className="w-8 text-center bg-gray-100" value={getFontSize} />
                <button onClick={increaseFontSize} className=" w-8 text-lg font-bold bg-gray-200 px-2 border-l-2 border-gray-400 rounded-tr-lg rounded-br-lg">+</button>
            </div>
        </div>

    )
}

export default Fontwindowfontsize
