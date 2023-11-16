import { BrowserRouter, Route, Routes } from "react-router-dom";

import React, { useState } from 'react'
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import dummy from './fakeData.json'

const Router = () => {
  const [data, setData] = useState(dummy)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home data={data} setData={setData} />} />
        <Route path="detail/:id" element={<Detail data={data} setData={setData}/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
