import Redes from "../content/Redes";
import NavbarLink from "../content/NavbarLink";

const Navbar = () => {
  return (
    <div className="container navbar__origin">
      <div className="navbar container__child">
        <Redes />

        <div >
          <h1 className="navbar__name">Alexis Giozza</h1>
          <h2 className="navbar__developer">Full stack developer</h2>
        </div>
        <NavbarLink />
      </div>
     
    </div>
  );
};

export default Navbar;
