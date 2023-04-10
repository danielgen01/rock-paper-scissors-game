import { useState } from "react"
import Headbanner from "./components/Headbanner"
import Mainbanner from "./components/Mainbanner"
import Rulesbtn from "./components/Rulesbtn"

function App() {
  return (
    <div className="App min-h-screen w-screen bg-gradient-to-r from-background-color-1 to-background-color-2">
     <Headbanner />
     <Mainbanner />
     <Rulesbtn />
    </div>
  )
}

export default App
