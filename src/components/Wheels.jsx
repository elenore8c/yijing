import { tri } from "../utils/tri"

export default function HsiWheel() {
    return(
    <>
     <div className="wh-containers">
        <div className="hsi-wh-container">
                <div className="nw">{tri[6].glyph}</div>
                <div className="n">{tri[7].glyph}</div>
                <div className="ne">{tri[3].glyph}</div>
                <div className="w">{tri[5].glyph}</div>
                <div>Hsi</div>
                <div className="e">{tri[2].glyph}</div>
                <div className="sw">{tri[4].glyph}</div>
                <div className="s">{tri[0].glyph}</div>
                <div className="se">{tri[1].glyph}</div>
    </div>
        <div className="wen-wh-container">
                <div className="nw">{tri[0].glyph}</div>
                <div className="n">{tri[5].glyph}</div>
                <div className="ne">{tri[6].glyph}</div>
                <div className="w">{tri[1].glyph}</div>
                <div>Wen</div>
                <div className="e">{tri[3].glyph}</div>
                <div className="sw">{tri[3].glyph}</div>
                <div className="s">{tri[2].glyph}</div>
                <div className="se">{tri[7].glyph}</div>
    </div>
    </div>
    
 </>
    )
}

// try fixed / sticky layout relative to parent div w responsive size 