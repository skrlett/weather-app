import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import HomePage from "./components/HomePage";
import Readme from "./components/Readme";

function App() {
  // return <HomePage />;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/readme" element={<Readme />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
