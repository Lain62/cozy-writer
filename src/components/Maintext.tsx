import { useFontStore } from '../store/Fontstore';

function Maintext() {
    const getFontSize = useFontStore((state) => state.fontSize);

    return (
        <textarea style={{ fontSize: getFontSize }} className=" p-2 w-3/4 h-screen resize-none focus:border-none focus:outline-none bg-gray-900 text-white" />
    )
}

export default Maintext
