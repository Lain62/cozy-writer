import { getProjects } from "../data/Projectwindowhelper"
import { useEffect } from "react"

function Sidepanel() {
  const readProjects = async () => {
    getProjects().then(e => {
      for (const entry of e) {
        console.log(entry)
      }
    })
  }

  useEffect(() => {
    readProjects()
  }, [])

  return (
    <div className="h-screen overflow-y-scroll bg-gray-900 w-1/4">
    </div>
  )
}

export default Sidepanel
