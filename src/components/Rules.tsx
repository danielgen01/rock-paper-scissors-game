import React, { useState } from "react"
import bonusrules from "../../images/image-rules-bonus.svg"
import { IoMdClose } from "react-icons/io"

type props = {
    isRulesOpen:any,
    setIsRulesOpen:any,
    toggleRules:any
}

const Rules:React.FC<props> = ({isRulesOpen,setIsRulesOpen,toggleRules}) => {
  
  return (
    <>
      <div
        className="rules-ctn fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-black/80 h-screen w-screen"
        style={{ display: isRulesOpen ? "block" : "none" }}
        onClick={toggleRules}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="rules-image-ctn h-screen w-screen  lg:w-[500px] lg:h-[500px] bg-white rounded-xl flex flex-col justify-center lg:justify-around">
            <div className="text-close-btn-flex-box justify-between h-20 items-center flex mx-20">
              <h1 className="uppercase text-2xl font-bold text-dark-text">
                Rules
              </h1>
              <IoMdClose className="text-3xl text-gray-500 cursor-pointer hover:opacity-70"  onClick={toggleRules}/>
            </div>
            <div className="image-flex-box justify-center items-center flex">
              <img src={bonusrules} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Rules
