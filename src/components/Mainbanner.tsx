import React from "react"
import papericon from "../../images/icon-paper.svg"
import rockicon from "../../images/icon-rock.svg"
import scissorsicon from "../../images/icon-scissors.svg"
import triangleicon from "../../images/bg-triangle.svg"

const Mainbanner = () => {
  return (
    <main className="main-icons-ctn flex w-full min-h-[500px] justify-center flex-col items-center">
       <h1 className="text-white text-5xl font-bold mb-10">Pick your weapon</h1>
      <div className="icons w-[600px] flex items-center justify-center gap-20 flex-wrap bg-[url(../../images/bg-triangle.svg)] bg-no-repeat bg-center">
        <div className="icon-1-ctn bg-gradient-to-r from-paper-gradient-1 to-paper-gradient-2 px-4 py-4 rounded-full">
          <div className="second-background bg-white w-32 h-32 rounded-full flex items-center justify-center">
            <img src={papericon} />
          </div>
        </div>

        <div className="icon-1-ctn bg-gradient-to-r from-scissors-gradient-1 to-scissors-gradient-2 px-4 py-4 rounded-full">
          <div className="second-background bg-white w-32 h-32 rounded-full flex items-center justify-center">
            <img src={scissorsicon} />
          </div>
        </div>

        <div className="icon-1-ctn bg-gradient-to-r from-rock-gradient-1 to-rock-gradient-2 px-4 py-4 rounded-full">
          <div className="second-background bg-white w-32 h-32 rounded-full flex items-center justify-center">
            <img src={rockicon} />
          </div>
        </div>
      </div>
     
    </main>
    
  )
}

export default Mainbanner
