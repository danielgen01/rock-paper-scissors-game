import spockicon from "../../.././images/icon-spock.svg"

type props = {
  startGame: any
  selectedWeapon:any
  setSelectedWeapon:any
}

export const Spock: React.FC<props> = ({ startGame,selectedWeapon,setSelectedWeapon }) => {

  function handleWeaponClick() {
    startGame()
    setSelectedWeapon("Spock")
    
  }

  return (
    <div className="icon-1-ctn bg-gradient-to-r from-spock-gradient-1 to-spock-gradient-2 px-4 py-4 rounded-full">
      <div
        className="second-background bg-white w-32 h-32 rounded-full flex items-center justify-center"
        onClick={handleWeaponClick}
      >
        <img src={spockicon} />
      </div>
    </div>
  )
}
