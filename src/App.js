import React from "react";
import Card from "./Component/card";
import Contact from "./Component/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App=()=>{
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Contact/>}></Route>
        <Route path="/Scratch_Cards" element={<Card/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;