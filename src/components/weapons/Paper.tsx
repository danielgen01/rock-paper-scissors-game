import papericon from "../../.././images/icon-paper.svg"

type props = {
  startGame: any
  selectedWeapon:any
  setSelectedWeapon:any
}

export const Paper: React.FC<props> = ({ startGame,selectedWeapon,setSelectedWeapon }) => {

  function handleWeaponClick() {
    startGame()
    setSelectedWeapon("Paper")
    console.log(selectedWeapon)
  }

  return (
    <div className="icon-1-ctn bg-gradient-to-r from-paper-gradient-1 to-paper-gradient-2 px-4 py-4 rounded-full">
      <div
        className="second-background bg-white w-32 h-32 rounded-full flex items-center justify-center"
        onClick={handleWeaponClick}
      >
        <img src={papericon} />
      </div>
    </div>
  )
}
