import { CgMenu } from "react-icons/cg";
import DropDown from "./../content/DropDown.js";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";

const Navbar = () => {
  const locate = useLocation();

  const [drop, setDrop] = useState(false);

  useEffect(() => {
    setDrop(false);
  }, [locate]);

  return (
    <div>
      <div className="container nav">
        <div className="navbar container__child">
          <h1>Alexis Giozza</h1>
          <div className="navbar__links navbar--computer">
            <div className="navbar__links--item">
              <a href="#about">Sobre mi</a>
              <span></span>
            </div>
            <div className="navbar__links--item">
              <a href="#proyects">Proyectos</a>
              <span></span>
            </div>
            <div className="navbar__links--item">
              <a href="#contact">Contact me</a>
              <span></span>
            </div>
          </div>
          <div className="navbar--phone">
            <button
              className="nabvar__burguer"
              onClick={drop ? () => setDrop(false) : () => setDrop(true)}
            >
              <CgMenu />
            </button>
          </div>
        </div>
      </div>
      {drop && <DropDown onClick={() => setDrop(false)} />}
    </div>
  );
};

export default Navbar;
