import { getProject, getTextFile } from "../data/Projecthelper"
import { useEffect, useState } from "react"
import { useProjectStore } from "../store/Projectstore"
import { FileEntry } from "@tauri-apps/api/fs";

function Sidepanel() {
	const [files, setFiles] = useState<FileEntry[]>();
	const getProjectName = useProjectStore((state) => state.projectName);
	const setProjectName = useProjectStore((state) => state.setProjectName);
	const getCurrentProjectName = useProjectStore(state => state.openedProject);
	const setOpenedFile = useProjectStore(state => state.setOpenedFile)
	const setOpenedText = useProjectStore(state => state.setOpenedText)
	const readProject = async (name: string) => {
		getProject(name).then(e => {
			setFiles(e);
		})
	}
	const readText = async (path: string) => {
		getTextFile(path).then(e => {
			setOpenedText(e)
			setOpenedFile(path)
		})
	}

	useEffect(() => {
		if (getCurrentProjectName != "") {
			readProject(getCurrentProjectName)
		}
	}, [getCurrentProjectName])



	return (
		<div className="h-screen w-1/4 bg-gray-900">
			<input onChange={(e) => { setProjectName(e.target.value) }} value={getProjectName} className="h-12 bg-gray-900 w-full border border-gray-700 outline-none text-white text-xl px-2" />
			<div className="h-[calc(100vh-3rem)] overflow-y-scroll bg-gray-800 w-full">
				{files?.map((e) => (
					<div>
						<button draggable onClick={() => readText(e.path)} className="text-white w-full h-12 text-left px-2 border border-gray-600 bg-gray-700" >{e.name}</button>
					</div>
				))}
			</div>
		</div>

	)
}

export default Sidepanel
