import React from "react"
import papericon from "../../images/icon-paper.svg"
import { Rock } from "./weapons/Rock"
import { Scissors } from "./weapons/Scissors"
import { Paper } from "./weapons/Paper"

const Mainbanner = () => {
  return (
    <main className="main-icons-ctn flex w-full min-h-[500px] justify-center flex-col items-center">
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
