import { wilHex } from "../utils/wilHex"
import Hex from "./Hex"

export default function HexTable() {
  const hexGrid = wilHex.map((hex, val) => <div className="hex-grid" key={val}>{wilHex[val].hex}</div>)
  const hexLib = wilHex.map((key, val) => <Hex key={val} num={val} />);
  return (
    <div className="hex-container">
      <div className="hex-table">
        {hexGrid}
      </div>
    </div>
  )
}