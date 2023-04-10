import rockicon from "../../../images/icon-rock.svg"

export function Rock() {
  return (
    <div className="icon-1-ctn bg-gradient-to-r from-rock-gradient-1 to-rock-gradient-2 px-4 py-4 rounded-full">
      <div className="second-background bg-white w-32 h-32 rounded-full flex items-center justify-center">
        <img src={rockicon} />
      </div>
    </div>
  )
}
