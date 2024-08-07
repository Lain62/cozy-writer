import Mainboard from "./components/Mainboard";
import Popup from "./components/Popup";

function App() {

  return (
    <div className='bg-gray-800 w-screen h-screen flex flex-col'>
      <Popup/>
      <Mainboard />
    </div>
  )
}

export default App
