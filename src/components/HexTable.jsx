import { wilHex } from "../utils/wilHex"
import Hex from "./Hex"

export default function HexTable() {
  const hexGrid = wilHex.map((key, val) => <Hex key={val} num={val} />);
  return (
    <>
      {hexGrid}
    </>
  )
}
