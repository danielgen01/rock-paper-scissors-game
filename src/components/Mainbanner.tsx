import React, { useState, useEffect } from "react"
import { Rock } from "./weapons/Rock"
import { Scissors } from "./weapons/Scissors"
import { Paper } from "./weapons/Paper"
import Rules from "./Rules"
import AOS from "aos"
import "aos/dist/aos.css"

const Mainbanner = () => {
  AOS.init()
  const [isGameStarted, setIsGameStarted] = useState<boolean>(false)
  const [isRulesOpen, setIsRulesOpen] = useState<boolean>(false)
  const [selectedWeapon, setSelectedWeapon] = useState("")
  const [comWeapon, setComWeapon] = useState("")
  const [renderComWeapon, setRenderComWeapon] = useState(false)
  const [result, setResult] = useState("")
  

 

  const weaponProps = {
    selectedWeapon,
    setSelectedWeapon,
  }

  function toggleRules() {
    setIsRulesOpen(!isRulesOpen)
  }

  function calculateComWeapon() {
    let randomNum: number = Math.floor(Math.random() * 3)

    switch (randomNum) {
      case 0:
        setComWeapon("Paper")
        break
      case 1:
        setComWeapon("Rock")
        break
      case 2:
        setComWeapon("Scissors")
        break
      default:
        ""
    }
  }

  const calculateResult = () => {
    switch (`${selectedWeapon} ${comWeapon}`) {
      case "Rock Rock":
      case "Paper Paper":
      case "Scissors Scissors":
        setResult("TIE");
        break;
      case "Rock Paper":
      case "Paper Scissors":
      case "Scissors Rock":
        setResult("COM WON");
        break;
      case "Rock Scissors":
      case "Paper Rock":
      case "Scissors Paper":
        setResult("USER WON");
        break;
      default:
        setResult("");
        break;
    }
  };
  

  useEffect(() => {
    const timeout = setTimeout(() => {
      setRenderComWeapon(true)
      calculateResult()
    }, 2500)

    return () => clearTimeout(timeout)
  }, [startGame])


  function startGame() {
    setIsGameStarted(true)
    calculateComWeapon()
  }

  return (
    <main className="main flex flex-col items-center">
      <div
        className="icons-ctn w-full min-h-[500px] justify-center flex-col items-center"
        style={{ display: !isGameStarted ? "flex" : "none" }}
        data-aos="fade-in"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
        <h1 className="text-white text-5xl font-bold mb-10">
          Pick your weapon
        </h1>
        <div className="icons w-[600px] flex items-center justify-center gap-20 flex-wrap bg-[url(../../images/bg-triangle.svg)] bg-no-repeat bg-center">
          <Paper startGame={startGame} {...weaponProps} />
          <Scissors startGame={startGame} {...weaponProps} />
          <Rock startGame={startGame} {...weaponProps} />
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

      {/* Renders when Game starts */}
      <div
        className="step-2-screen grid grid-cols-2  w-full mt-20"
        style={{ display: isGameStarted ? "grid" : "none" }}
      >
        <div className="grid-item-1 text-white flex justify-center items-center flex-col gap-5">
          <h1 className="uppercase font-bold -tracking-tighter">you picked</h1>

          {selectedWeapon === "Paper" ? (
            <Paper startGame={""} selectedWeapon="" setSelectedWeapon="" />
          ) : selectedWeapon === "Rock" ? (
            <Rock startGame={""} selectedWeapon="" setSelectedWeapon="" />
          ) : (
            <Scissors startGame={""} selectedWeapon="" setSelectedWeapon="" />
          )}
        </div>

        <div className="grid-item-1 text-white flex justify-center items-center flex-col gap-5">
          <h1 className="uppercase font-bold -tracking-tighter">
            computer picked
          </h1>
          {renderComWeapon &&
            (comWeapon === "Paper" ? (
              <Paper startGame={""} selectedWeapon="" setSelectedWeapon="" />
            ) : selectedWeapon === "Rock" ? (
              <Rock startGame={""} selectedWeapon="" setSelectedWeapon="" />
            ) : (
              <Scissors startGame={""} selectedWeapon="" setSelectedWeapon="" />
            ))}
        </div>
      </div>

      
        <div className="RESULT CTN mt-5">
          <h1 className="text-red-500 text-5xl font-bold uppercase">
             {result}
          </h1>
        </div>
     
    </main>
  )
}

export default Mainbanner
