import React, { useState } from "react"
import { Rock } from "./weapons/Rock"
import { Scissors } from "./weapons/Scissors"
import { Paper } from "./weapons/Paper"
import Rules from "./Rules"

const Mainbanner = () => {
  const [isGameStarted, setIsGameStarted] = useState<boolean>(false)
  const [isRulesOpen, setIsRulesOpen] = useState<boolean>(false)

  function toggleRules() {
    setIsRulesOpen(!isRulesOpen)
  }

  return (
    <main className="main">
      <div
        className="icons-ctn w-full min-h-[500px] justify-center flex-col items-center"
        style={{ display: !isGameStarted ? "flex" : "none" }}
      >
        <h1 className="text-white text-5xl font-bold mb-10">
          Pick your weapon
        </h1>
        <div className="icons w-[600px] flex items-center justify-center gap-20 flex-wrap bg-[url(../../images/bg-triangle.svg)] bg-no-repeat bg-center">
          <Paper />
          <Scissors />
          <Rock />
        </div>
        <div className="button-ctn flex justify-center w-full ">
          <button
            type="button"
            className="text-white  font-normal border-2 mt-10 ml-52 lg:ml-[500px] px-7 py-2 rounded-md "
            onClick={toggleRules}
          >
            Rules
          </button>
        </div>
        <Rules
          toggleRules={toggleRules}
          isRulesOpen={isRulesOpen}
          setIsRulesOpen={setIsRulesOpen}
        />
      </div>
    </main>
  )
}

export default Mainbanner