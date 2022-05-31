import logo from "./logo.svg";
import "./App.css";
import Registration from "./Pages/Login/Registration";
import { Route, Routes } from "react-router-dom";
import Chart from "./Pages/Chart/Chart";
import Login from "./Pages/Login/Login";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Registration />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/chart" element={<Chart />}></Route>
      </Routes>
    </div>
  );
}

export default App;
