import TMDB from "./../assets/images/TMDB.png";
import hangmanGame from "./../assets/images/hangmanGame.png";
import clima from "./../assets/images/clima.jpg";
import lista from "./../assets/images/lista.png";
import color from "./../assets/images/color.jpg";
import eCommerce from "./../assets/images/e-commerce.png";
import adFlower from "./../assets/images/adFlower.png";

const Proyects = () => {
  return (
    <div className="container" id="proyects">
      <div className="proyects container__child">
        <h1 className="proyects__info--title">Proyectos</h1>
        <div className="proyects__image">
          <div className="proyects__image--elem1 image__overlay">
            <div className="overlay">
              <p>GameOver</p>
              <div className="overlay--links">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/AleAmg/GameOver"
                >
                  Link to repository
                </a>
                <a
                  href="https://gameover-handmangame.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Web
                </a>
              </div>
            </div>
            <img
              className="proyects__image--elem"
              src={hangmanGame}
              alt="TMDB"
            ></img>
          </div>
          <div className="proyects__image--elem2 image__overlay">
            <div className="overlay">
              <p>AdFlower</p>
              <div className="overlay--links">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/AleAmg/Proyecto-Profesional_API-"
                >
                  Link to back-end
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/AleAmg/Proyecto-Profesional_WEB"
                >
                  Link to front-end
                </a>
              </div>
            </div>
            <img
              className="proyects__image--elem"
              src={adFlower}
              alt="TMDB"
            ></img>
          </div>
          <div className="proyects__image--elem3 image__overlay">
            <div className="overlay">
              <p>La tienda del buhonero</p>
              <div className="overlay--links">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/AleAmg/E-commerce"
                >
                  Link to repository
                </a>
              </div>
            </div>
            <img
              className="proyects__image--elem"
              src={eCommerce}
              alt="TMDB"
            ></img>
          </div>
          <div className="proyects__image--elem4 image__overlay">
            <div className="overlay">
              <p>TMDB</p>
              <div className="overlay--links">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/AleAmg/TMDB"
                >
                  Link to repository
                </a>
              </div>
            </div>
            <img className="proyects__image--elem" src={TMDB} alt="TMDB"></img>
          </div>
          <div className="proyects__image--elem5 image__overlay">
            <div className="overlay">
              <p>Color Game</p>
              <div className="overlay--links">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/AleAmg/Color-Game"
                >
                  Link to repository
                </a>
                <a
                  href="https://colorgameplay.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Web
                </a>
              </div>
            </div>
            <img className="proyects__image--elem" src={color} alt="TMDB"></img>
          </div>
          <div className="proyects__image--elem6 image__overlay">
            <div className="overlay">
              <p>To Do List</p>
              <div className="overlay--links">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/AleAmg/ToDoList"
                >
                  Link to repository
                </a>
                <a
                  href="https://todolistamg.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Web
                </a>
              </div>
            </div>
            <img className="proyects__image--elem" src={lista} alt="TMDB"></img>
          </div>
          <div className="proyects__image--elem7 image__overlay">
            <div className="overlay">
              <p>Weather Channel</p>
              <div className="overlay--links">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/AleAmg/Weather-Channel"
                >
                  Link to repository
                </a>
                <a
                  href="https://weatherchannelamg.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Web
                </a>
              </div>
            </div>
            <img className="proyects__image--elem" src={clima} alt="TMDB"></img>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Proyects;
