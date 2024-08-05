import Sidepanel from "./Sidepanel"
import Maintext from "./Maintext"

function Mainboard() {
    return (
        <main className="flex">
            <Sidepanel />
            <Maintext />
        </main>
    )
}

export default Mainboard