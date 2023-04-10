import scissorsicon from "../../../images/icon-scissors.svg"

type props = {
  startGame: any
  selectedWeapon: any
  setSelectedWeapon: any
}

export const Scissors: React.FC<props> = ({
  startGame,
  selectedWeapon,
  setSelectedWeapon,
}) => {

  function handleWeaponClick() {
    startGame()
    setSelectedWeapon("Scissors")
  }
  
  return (
    <div className="icon-1-ctn bg-gradient-to-r from-scissors-gradient-1 to-scissors-gradient-2 px-4 py-4 rounded-full">
      <div
        className="second-background bg-white w-32 h-32 rounded-full flex items-center justify-center"
        onClick={handleWeaponClick}
      >
        <img src={scissorsicon} />
      </div>
    </div>
  )
}
