import { useState, useEffect } from "react";
import logo from "./logo.svg";
import Demo from "./demo";
import Try from "./Try";
import Form from './Form';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Form />} />
        <Route path="/pdf" element={<Try />} />   
        {/* <Route path="/chat" element={<Chat />} />    */}

      
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
