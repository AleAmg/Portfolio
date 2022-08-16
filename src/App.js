import "./style.css";

import Navbar from "./component/Navbar";

import Profile from "./component/Profile";
import Proyects from "./component/Proyects";
import Footer from "./component/Footer";

import ContactMe from "./component/ContactMe";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Profile />
      <Proyects />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
