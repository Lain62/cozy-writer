import { Navopt } from "./Navctx";

const FilePressed = () => {
    console.log(`pressed`)
}


export const FileOpts: Navopt[] = [
    {
        name: "Open Project",
        onClick: FilePressed
    },
    {
        name: "Save Project",
        onClick: FilePressed
    }
]