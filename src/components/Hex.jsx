import { wilHex } from "../utils/wilHex"

export default function Hex( { num } ) {

return (
<>
    <div className="hex-info">
        <div className="hex-glyph">{wilHex[num].hex}</div>
        <div className="hex-num">{wilHex[num].num}. {wilHex[num].char}</div> 
        <div className="hex-pinyin">{wilHex[num].simpinyin}</div>
        <div className="hex-name">{wilHex[num].name}</div>
        <div className="hex-thwan">{wilHex[num].thwan}</div>
        <div className="hex-img">{wilHex[num].img}</div>
        <div className="hex-first">{wilHex[num].line1}{wilHex[num].first}</div>
        <div className="hex-second">{wilHex[num].line2}{wilHex[num].second}</div>
        <div className="hex-third">{wilHex[num].line3}{wilHex[num].third}</div>
        <div className="hex-fourth">{wilHex[num].line4}{wilHex[num].fourth}</div>
        <div className="hex-fifth">{wilHex[num].line5}{wilHex[num].fifth}</div>
        <div className="hex-sixth">{wilHex[num].line6}{wilHex[num].sixth}</div>
        <div className="hex-seventh">{wilHex[num].seventh}</div>
    </div>
</>
  )
}
