import { Link } from "react-router-dom";
import Redes from "../content/Redes";

const Navbar = () => {
  return (
    <div className="container">
      <div className="navbar">
        <Redes />
        <h1 className="navbar__name">Alexis Giozza</h1>
        <div className="navbar__link">
          <Link to="/">
            <h2 className="navbar__link--text">Inicio</h2>
          </Link>
          <Link to="/proyectos">
            <h2 className="navbar__link--text">Proyectos</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
