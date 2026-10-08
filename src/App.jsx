import React from "react"

import Header from "./components/Header"
import HexTable from "./components/HexTable";
import LineDev from "./components/LineDev";
import FivePlumBar from "./components/FivePlumBar";
import Wheels from "./components/Wheels"

import './App.css';

export default function App() {

  return (
<>
<Header />
<HexTable />
<LineDev />
<Wheels />
<FivePlumBar /> 
</>
)
}