import React,{useState} from "react"
import { Rock } from "./weapons/Rock"
import { Scissors } from "./weapons/Scissors"
import { Paper } from "./weapons/Paper"

const Mainbanner = () => {
  const [isGameStarted,setIsGameStarted] = useState<boolean>(false)

  return (
    <main className="main-icons-ctn w-full min-h-[500px] justify-center flex-col items-center"style={{display:!isGameStarted? "flex" : "none"}}>
      <h1 className="text-white text-5xl font-bold mb-10">Pick your weapon</h1>
      <div className="icons w-[600px] flex items-center justify-center gap-20 flex-wrap bg-[url(../../images/bg-triangle.svg)] bg-no-repeat bg-center">
        <Paper />
        <Scissors />
        <Rock />
      </div>
    </main>
  )
}

export default Mainbanner
