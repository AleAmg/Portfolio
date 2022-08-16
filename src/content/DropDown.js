const DropDown = () => {
  return (
    <div className="dropdown">
      <div className="dropdown__link">
        <a className="dropdown__link--item" href="#about">
          Sobre mi
        </a>
      </div>

      <div className="dropdown__link">
        <a className="dropdown__link--item" href="#proyects">
          Proyectos
        </a>
      </div>
      <div className="dropdown__link">
        <a className="dropdown__link--item" href="#contact">
          Contact me
        </a>
      </div>
    </div>
  );
};
export default DropDown;
