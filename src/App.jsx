import { useState } from "react"
import Home from "./Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Detail from "./Detail"

function App() {
 return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/detail" element={<Detail/>} ></Route>
  </Routes>
  </BrowserRouter>
 )
}

export default App


 