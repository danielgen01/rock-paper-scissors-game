import React from "react"

type props = {
  score: number
  setScore: any
  comScore:number 
  setComScore:any
}

const Headbanner: React.FC<props> = ({ score, setScore, comScore , setComScore }) => {
  return (
    <div className="mx-10 h-60 flex justify-center items-center">
      <div className="content  w-[599px] h-40 rounded-xl border-4 border-header-outline  flex justify-between">
        <div className="text-column flex flex-col justify-center uppercase text-white font-bold text-xl lg:text-2xl px-5">
          <h1>Rock</h1>
          <h1>Paper</h1>
          <h1>Scissors</h1>
          <h1>Lizzard</h1>
          <h1>Spock</h1>
        </div>
        <div className="score-ctn bg-white rounded-xl mr-5 flex flex-col items-center w-20 h-2/3 justify-center mt-5">
          <h1 className="uppercase text-score-text font-bold text-sm">user</h1>
          <h1 className="text-6xl">{score}</h1>
        </div>
        <div className="score-ctn bg-white rounded-xl mr-5 flex flex-col items-center w-20 h-2/3 justify-center mt-5">
          <h1 className="uppercase text-score-text font-bold text-sm">com</h1>
          <h1 className="text-6xl">{comScore}</h1>
        </div>
      </div>
    </div>
  )
}

export default Headbanner
