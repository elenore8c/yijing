import { wilHex } from "../utils/wilHex"

export default function Hex( { num } ) {

return (
<>
    <p>
        {wilHex[num].num}<br/>
        {wilHex[num].char}<br/>
        {wilHex[num].simpinyin}<br/>
        {wilHex[num].hex}<br/>
        {wilHex[num].name}<br/>
        {wilHex[num].thwan}<br/>
        {wilHex[num].img}<br/>
        {wilHex[num].line1}{wilHex[num].first}<br/>
        {wilHex[num].line2}{wilHex[num].second}<br/>
        {wilHex[num].line3}{wilHex[num].third}<br/>
        {wilHex[num].line4}{wilHex[num].fourth}<br/>
        {wilHex[num].line5}{wilHex[num].fifth}<br/>
        {wilHex[num].line6}{wilHex[num].sixth}<br/>
        {wilHex[num].seventh}<br/>
    </p>
</>
  )
}
