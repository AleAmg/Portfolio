/* import Redes from "../content/Redes";
import NavbarLink from "../content/NavbarLink"; */

const Navbar = () => {
  return (
    <div className="container navbar__origin">
      <div className="navbar container__child">
        {/* <Redes />
        <div >
          <h1 className="navbar__name">Alexis Giozza</h1>
          <h2 className="navbar__developer">Full stack developer</h2>
        </div>
        <NavbarLink /> */}
        <h1>Alexis Giozza</h1>
        <div className="navbar__links">
          <div className="navbar__links--item">
            <a href="#home">Home</a>
            <span></span>
          </div>
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
      </div>
    </div>
  );
};

export default Navbar;
