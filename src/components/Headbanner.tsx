import React from "react"

const Headbanner = () => {
  return (
    <div className="mx-10 h-52 flex justify-center items-center">
      <div className="content  w-[599px] h-36 rounded-xl border-4 border-header-outline  flex justify-between">
        <div className="text-column flex flex-col justify-center uppercase text-white font-bold text-3xl ml-5">
          <h1>Rock</h1>
          <h1>Paper</h1>
          <h1>Scissors</h1>
        </div>
        <div className="score-ctn bg-white rounded-xl mr-5 flex flex-col items-center w-32 h-2/3 justify-center mt-5">
          <h1 className="uppercase text-score-text font-bold text-sm">score</h1>
          <h1 className="text-6xl">0</h1>
        </div>
      </div>
    </div>
  )
}

export default Headbanner
