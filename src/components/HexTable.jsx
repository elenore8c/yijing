import { wilHex } from "../utils/wilHex"
import Hex from "./Hex"

export default function HexTable() {


const hexGrid = wilHex.map((hex, val) => 
  <div key={val}>
    <div className="label-hex">{val + 1}</div>
    {wilHex[val].hex}</div>);
  
  // const [selectedHex, setSelectedHex] = useState(0);

  return (
  <>
    <div className="hex-container">
      <div className="hex-table">
        {hexGrid}
      </div>
    </div>
  </>
  )
}