import { useState } from "react"
import Headbanner from "./components/Headbanner"
import Mainbanner from "./components/Mainbanner"


function App() {
  const [userScore,setUserScore] = useState(0)
  const [comScore,setComScore] = useState(0)

  return (
    <div className="App min-h-screen w-screen bg-gradient-to-r from-background-color-1 to-background-color-2">
     <Headbanner score={userScore} setScore={setUserScore} comScore={comScore} setComScore={setComScore}/>
     <Mainbanner score={userScore} setScore={setUserScore} comScore={comScore} setComScore={setComScore}/>
    
    </div>
  )
}

export default App
