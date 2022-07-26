import "./style.css";

import Navbar from "./component/Navbar";
import { Routes, Route } from "react-router";
import Profile from "./component/Profile";
import Proyects from "./component/Proyects";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/proyects" element={<Proyects />} />
      </Routes>
    </div>
  );
}

export default App;
