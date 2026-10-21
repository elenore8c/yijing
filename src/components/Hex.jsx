import { wilHex } from "../utils/wilHex"

export default function Hex( { num } ) {

return (
<>
    <div className="hex">
        <div className="hex-glyph">{wilHex[num].hex}</div>
        <h2 className="hex-header">
         {wilHex[num].char}<br/>
         {wilHex[num].simpinyin}<br/>
         {wilHex[num].num}. {wilHex[num].name}</h2>
        <h3 className="hex-labels">Judgment</h3>
        <div className="hex-thwan">{wilHex[num].thwan}</div>
        <h3 className="hex-labels">Image</h3>
        <div className="hex-img">{wilHex[num].img}</div>
        <h3 className="hex-labels">Lines</h3>
        <span className="hex-line">{wilHex[num].line1}</span><div className="hex-line">{wilHex[num].first}</div>
        <div className="hex-line">{wilHex[num].line2}{wilHex[num].second}</div>
        <div className="hex-line">{wilHex[num].line3}{wilHex[num].third}</div>
        <div className="hex-line">{wilHex[num].line4}{wilHex[num].fourth}</div>
        <div className="hex-line">{wilHex[num].line5}{wilHex[num].fifth}</div>
        <div className="hex-line">{wilHex[num].line6}{wilHex[num].sixth}</div>
        <div className="hex-line">{wilHex[num].seventh}</div>
    </div>
</>
  )
}
