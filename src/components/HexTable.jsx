import { wilHex } from "../utils/wilHex"
import Hex from "./Hex"


export default function HexTable() {
const hexGrid = wilHex.map((num, val) => <Hex num={val} />);
return (
<>
{hexGrid}
</>
  )
}
