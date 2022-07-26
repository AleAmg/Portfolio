import { Link } from "react-router-dom";
import { AiFillHome, AiOutlineFolderOpen } from "react-icons/ai";

const NavbarLink = () => {
  return (
    <div className="social">
      <ul>
        <li className="social__icon">
          <Link to="/" className="social__link social__link--home">
            <AiFillHome />
          </Link>
        </li>
      </ul>
      <ul>
        <li className="social__icon">
          <Link to="/proyects" className="social__link social__link--proyect">
            <AiOutlineFolderOpen />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavbarLink;
/* <div className="navbar__link">
      <Link to="/">
        <h2 className="navbar__link--text">Inicio</h2>
      </Link>
      <Link to="/proyectos">
        <h2 className="navbar__link--text">Proyectos</h2>
      </Link>
    </div> */
