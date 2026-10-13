import { wilHex } from "../utils/wilHex"
import Hex from "./Hex"

export default function HexTable() {

  const hexGrid = wilHex.map((hex, val) => 
  <div key={val}>
    <div className="label-hex">{val + 1}. {wilHex[val].char}<br/>
    {wilHex[val].simpinyin}</div>
    {wilHex[val].hex}</div>)
  
  return (
    <div className="hex-container">
      <div className="hex-table">
        {hexGrid}
      </div>
    </div>
  )
}