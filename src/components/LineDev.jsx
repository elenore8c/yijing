import React from "react"
import { lines } from  "../utils/lines"
import { tri } from "../utils/tri"

export default function LineDev() {
const triLib = tri.map((key, val) => <div key={val}>{tri[val].glyph}</div>)
  return (
  <>
    {triLib}
    <div className="line-dev">
        <div className="third">
        <div>{lines[7]}</div>
        <div>{lines[12]}</div>
        <div>{lines[6]}</div>
        <div>{lines[11]}</div>
        <div>{lines[10]}</div>
        <div>{lines[9]}</div>
        <div>{lines[13]}</div>
        <div>{lines[8]}</div>
    </div>
    <div className="second">
      <div>{lines[4]}</div>
      <div>{lines[5]}</div><div>{lines[3]}</div>
      <div>{lines[2]}</div></div>
    <div className="first">
      <div>{lines[0]}</div>
      <div>{lines[1]}</div>
    </div>
  </div>
</>
  )
}