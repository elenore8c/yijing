import { React } from "react"
import Hex from "./Hex"

export default function FivePlum({ hexKeyOne, hexKeyTwo, hexKeyNuc }){

// fate, subject trigrams course of change descriptor

return(
 <div className='five-plum'>
    <Hex
    num={hexKeyOne} />
    <Hex
    num={hexKeyTwo} />
     <Hex
   num={hexKeyNuc} />
</div>
)
}