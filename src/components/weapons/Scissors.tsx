import scissorsicon from "../../../images/icon-scissors.svg"

export function Scissors() {
  return (
    <div className="icon-1-ctn bg-gradient-to-r from-scissors-gradient-1 to-scissors-gradient-2 px-4 py-4 rounded-full">
      <div className="second-background bg-white w-32 h-32 rounded-full flex items-center justify-center">
        <img src={scissorsicon} />
      </div>
    </div>
  )
}
