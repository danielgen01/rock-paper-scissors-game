import rockicon from "../../../images/icon-rock.svg"
type props = {
  startGame: any
}

export const Rock: React.FC<props> = ({ startGame }) => {
  return (
    <div className="icon-1-ctn bg-gradient-to-r from-rock-gradient-1 to-rock-gradient-2 px-4 py-4 rounded-full">
      <div
        className="second-background bg-white w-32 h-32 rounded-full flex items-center justify-center"
        onClick={startGame}
      >
        <img src={rockicon} />
      </div>
    </div>
  )
}
