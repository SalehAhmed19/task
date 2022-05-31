import logo from "./logo.svg";
import "./App.css";
import Login from "./Pages/Login/Login";
import { Route, Routes } from "react-router-dom";
import Chart from "./Pages/Chart/Chart";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/chart" element={<Chart />}></Route>
      </Routes>
    </div>
  );
}

export default App;
