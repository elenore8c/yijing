import { React } from "react"
import Hex from "./Hex"

export default function FivePlum({ hexKeyOne, hexKeyTwo, hexKeyNuc }){

// fate, subject trigrams course of change descriptor

return(
 <div className='five-plum'>
   <h1>first</h1>
    <Hex
    num={hexKeyOne} />
    <h1>second</h1>
    <Hex
    num={hexKeyTwo} />
    <h1>nuclear</h1>
     <Hex
   num={hexKeyNuc} />
</div>
)
}