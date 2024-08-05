import Navbtn from "./Navbtn";
import { Navopt } from "./Navbtn";

const FilePressed = (num: number) => {
  console.log(`${num} pressed`)
}

const FileOpts: Navopt[] = [
  {
    name: "Open Project",
    onClick: FilePressed
  },
  {
    name: "Save Project",
    onClick: FilePressed
  }
]

function Navbar() {
  return (
    <nav className="flex gap-2 p-2 bg-gray-950 border-gray-800 border-b-2 border-solid w-screen h-10">
      <Navbtn text="File" options={FileOpts} />
      <Navbtn text="Settings" options={[{ name: "hello", onClick: FilePressed }]} />
    </nav>
  );
};

export default Navbar;
