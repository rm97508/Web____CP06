import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Outlet />
      <p className="fiap">Juliana Angelo Bezerra (RM97508) e Arthur Valente Costa (RM)</p>
    </div>
  );
}

export default App;
