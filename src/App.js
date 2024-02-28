import "./style.css";

import Navbar from "./component/Navbar";

import Profile from "./component/Profile";
import Proyects from "./component/Proyects";
import Footer from "./component/Footer";

import ContactMe from "./component/ContactMe";
import Eyes from "./content/Eyes";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Profile />
      <Proyects />
      <ContactMe />
      <Footer />
      <Eyes str="d"/>
    </div>
  );
}

export default App;
