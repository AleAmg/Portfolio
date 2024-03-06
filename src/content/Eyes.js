const Eyes = ({ str, talle }) => {
  return (
    <div className="eye-1 container__eyes">
      <div className={`eye talle--${talle} eye__l`}>
        <div className={`eye__pupila--${str} eye__pupila--${str}--${talle}`}>
          <div className="eye__brillo--g"></div>
          <div className="eye__brillo--c"></div>
        </div>
      </div>
      <div className={`eye talle--${talle} eye__r`}>
        <div className={`eye__pupila--${str} eye__pupila--${str}--${talle}`}>
          <div className="eye__brillo--g"></div>
          <div className="eye__brillo--c"></div>
        </div>
      </div>
    </div>
  );
};

export default Eyes;
