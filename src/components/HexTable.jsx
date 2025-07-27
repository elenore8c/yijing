import { wilHex } from "../utils/wilHex"
import Hex from "./Hex"

export default function HexTable() {
  const hexGrid = wilHex.map((hex, val) => <div>{wilHex[val].hex}</div>)
  const hexLib = wilHex.map((key, val) => <Hex key={val} num={val} />);
  return (
    <>
      {hexGrid}
      {hexLib}
    </>
  )
}