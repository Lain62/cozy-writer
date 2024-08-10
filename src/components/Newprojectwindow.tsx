import { closeNewProjectWindow, createProject } from "../data/Projectwindowhelper";
import { useState } from "react";
function Newprojectwindow() {
  const [name, setName] = useState("");
  return (
    <div className="bg-black/50 w-screen h-screen absolute flex justify-center items-center">
      <div className="bg-gray-200 w-96 h-48 rounded-lg ">
        <div className="w-full flex justify-center p-4 border-b-2 border-solid border-gray-300">
          <h2 className="flex-grow text-left text-xl font-semibold "> New Project </h2>
          <button onClick={closeNewProjectWindow} className="flex-shrink bg-gray-500 text-blue-50 font-semibold rounded px-2">X</button>
        </div>
        <div className="px-8 mt-4 flex flex-col gap-2">
          <h3 className="text-center font-semibold">Enter a project name</h3>
          <input value={name} onChange={e => setName(e.target.value)} className="w-full text-center h-8 outline-none px-2 rounded shadow-black bg-gray-50"></input>
          <button onClick={() => { createProject(name); closeNewProjectWindow() }} className="flex-shrink bg-gray-500 text-blue-50 font-semibold rounded px-2">Create</button>
        </div>
      </div>
    </div>
  )
};

export default Newprojectwindow;
