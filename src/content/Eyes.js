const Eyes = ({str}) => {
  
  return (
    <div className="container__eyes">
      <div className="eye eye__l">
        <div className={`eye__pupila--${str}`}></div>
      </div>
      <div className="eye eye__r">
        <div className={`eye__pupila--${str}`}></div>
      </div>
    </div>
  );
};

export default Eyes;
