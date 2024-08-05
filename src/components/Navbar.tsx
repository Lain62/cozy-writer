import Navbtn from "./Navbtn";
import { FileOpts } from "../data/Navfilectx";
import { SettingsOpts } from "../data/Navsettingsctx";



function Navbar() {
  return (
    <nav className="flex gap-2 p-2 bg-gray-950 border-gray-800 border-b-2 border-solid w-screen h-10">
      <Navbtn text="File" options={FileOpts} />
      <Navbtn text="Settings" options={SettingsOpts} />
    </nav>
  );
};

export default Navbar;
