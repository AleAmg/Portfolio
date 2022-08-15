import "./style.css";

import Navbar from "./component/Navbar";
  
import Profile from "./component/Profile";
import Proyects from "./component/Proyects";
import Footer from "./component/Footer";
import BothNav from "./content/BothNav";
import ContactMe from "./component/ContactMe";

function App() {
  return (
    <div>
      <Navbar />
      <BothNav />
      <Profile />
      <Proyects />
      <ContactMe />
      {/* <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/proyects" element={<Proyects />} />
        <Route path="/contactMe" element={<ContactMe />} />
      </Routes> */}
      <Footer />
    </div>
  );
}

export default App;
