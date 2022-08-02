import "./style.css";

import Navbar from "./component/Navbar";
import { Routes, Route } from "react-router";
import Profile from "./component/Profile";
import Proyects from "./component/Proyects";
import Footer from "./component/Footer";
import BothNav from "./content/BothNav";

function App() {
  return (
    <div>
      <Navbar />
      <BothNav/>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/proyects" element={<Proyects />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
