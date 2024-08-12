import { FileEntry } from "@tauri-apps/api/fs";
import { closePopup } from "../data/Popuphelper";
import { getProjects } from "../data/Projectwindowhelper";
import { useProjectStore } from "../store/Projectstore";
import { useEffect, useState } from "react";

function Openprojectwindow() {
    const [projects, setProjects] = useState<FileEntry[]>();
    const setProject = useProjectStore(state => state.setProjectName);
    const setOpened = useProjectStore(state => state.setOpenedProjectName);

    const openProject = (name: string) => {
        console.log("hello i am trying to apply");

        setProject(name);
        setOpened(name);

        closePopup();
    }

    const readProjects = async () => {
        getProjects().then(e => {
            setProjects(e);
        });
    }

    useEffect(() => {
        readProjects();
    }, []);


    return (
        <div className="bg-black/50 w-screen h-screen absolute flex justify-center items-center">
            <div className="bg-gray-200 w-96 h-96 rounded-lg ">
                <div className="w-full flex justify-center p-4 border-b-2 border-solid border-gray-300">
                    <h2 className="flex-grow text-left text-xl font-semibold "> Open Project </h2>
                    <button onClick={closePopup} className="flex-shrink bg-gray-500 text-blue-50 font-semibold rounded px-2">X</button>
                </div>
                <div className="px-8 mt-4 flex flex-col gap-2 overflow-y-scroll">
                    {projects?.map(e => (
                        <div className="w-full h-12 bg-gray-300 px-2 flex justify-between content-center items-center" >
                            <p className="w-3/4">{e.name}</p>
                            <button onClick={() => {
                                if (typeof e.name == "string") {
                                    openProject(e.name)
                                }
                            }} className="flex-shrink bg-gray-500 text-blue-50 font-semibold rounded px-2">Open</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Openprojectwindow