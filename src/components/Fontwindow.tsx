import { closeFontWindow } from "../data/Fontwindowhelper";
import Fontwindowfontsize from "./Fontwindowfontsize";

function Fontwindow() {
  return (
    <div className="bg-black/50 w-screen h-screen absolute flex justify-center items-center">
      <div className="bg-gray-200 w-96 h-96 rounded-lg ">
        <div className="w-full flex justify-center p-4 border-b-2 border-solid border-gray-300">
          <h2 className="flex-grow text-left text-xl font-semibold "> Font Settings </h2>
          <button onClick={closeFontWindow} className="flex-shrink bg-gray-500 text-blue-50 font-semibold rounded px-2">X</button>
        </div>
        <div className="px-8 mt-4">
          <Fontwindowfontsize />
        </div>
      </div>
    </div>
  )
};

export default Fontwindow;
