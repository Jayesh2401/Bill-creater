import Try from "./Try";
import Form from "./Form";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/pdf" element={<Try />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
