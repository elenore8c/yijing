import { wilHex } from "../utils/wilHex"

export default function Hex( { num } ) {

return (
<>
    <div>
        <div className="">{wilHex[num].hex}</div>
        <div className="">{wilHex[num].num}. {wilHex[num].char}</div> 
        <div className="">{wilHex[num].simpinyin}</div>
        <div className="">{wilHex[num].name}</div>
        <div className="">{wilHex[num].thwan}</div>
        <div className="">{wilHex[num].img}</div>
        <div className="">{wilHex[num].line1}{wilHex[num].first}</div>
        <div className="">{wilHex[num].line2}{wilHex[num].second}</div>
        <div className="">{wilHex[num].line3}{wilHex[num].third}</div>
        <div className="">{wilHex[num].line4}{wilHex[num].fourth}</div>
        <div className="">{wilHex[num].line5}{wilHex[num].fifth}</div>
        <div className="">{wilHex[num].line6}{wilHex[num].sixth}</div>
        <div className="">{wilHex[num].seventh}</div>
    </div>
</>
  )
}
