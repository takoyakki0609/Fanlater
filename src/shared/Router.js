import { BrowserRouter, Route, Routes } from "react-router-dom";

import React, { useState } from "react";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import dummy from "./fakeData.json";
import { FanlaterContext } from "context/FanlaterContext";

const Router = () => {
  const [data, setData] = useState(dummy);
  return (
    <FanlaterContext.Provider　value={{data, setData}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route
            path="detail/:id"
            element={<Detail/>}
          />
        </Routes>
      </BrowserRouter>
    </FanlaterContext.Provider>
  );
};

export default Router;
