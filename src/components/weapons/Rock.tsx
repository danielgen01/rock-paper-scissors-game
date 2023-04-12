import rockicon from "../../../images/icon-rock.svg"
type props = {
  startGame: any
  selectedWeapon:any
  setSelectedWeapon:any
}

export const Rock: React.FC<props> = ({ startGame,selectedWeapon,setSelectedWeapon}) => {

  function handleWeaponClick() {
    startGame()
    setSelectedWeapon("Rock")
  }

  return (
    <div className="icon-1-ctn bg-gradient-to-r from-rock-gradient-1 to-rock-gradient-2 px-4 py-4 rounded-full
    hover:shadow-rock-gradient-2 hover:shadow-2xl hover:scale-110 duration-200">
      <div
        className="second-background bg-white w-32 h-32 rounded-full flex items-center justify-center"
        onClick={handleWeaponClick}
      >
        <img src={rockicon} />
      </div>
    </div>
  )
}
