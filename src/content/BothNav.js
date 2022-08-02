import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillHome,
  AiOutlineFolderOpen,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const BothNav = () => {
  return (
    <div className="container navbar__both">
      <div className="navbar container__child">
        <div className="social">
          <ul>
            <li className="social__icon">
              <a
                className="social__link social__link--git"
                href="https://github.com/AleAmg"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social__icon">
              <a
                className="social__link social__link--linkedIn"
                aria-hidden="true"
                href="https://www.linkedin.com/in/alexisgiozza/"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillLinkedin />
              </a>
            </li>
            <li className="social__icon">
              <Link to="/" className="social__link social__link--home">
                <AiFillHome />
              </Link>
            </li>
            <li className="social__icon">
              <Link
                to="/proyects"
                className="social__link social__link--proyect"
              >
                <AiOutlineFolderOpen />
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar__texts">
          <h1 className="navbar__name">Alexis</h1>
          <h1 className="navbar__name">Giozza</h1>

          <h2 className="navbar__developer">Full stack developer</h2>
        </div>
        <div></div>
      </div>
    </div>
  );
};
export default BothNav;
