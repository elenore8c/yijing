import { React } from "react"
import Hex from "./Hex"

export default function FivePlum({ hexNumOne, hexNumTwo, hexNumNuc }){
return(
 <div className='five-plum'>
    <Hex
    num={hexNumOne} />
    <Hex
    num={hexNumTwo} />
     <Hex
     num={hexNumNuc} />
</div>
)
}