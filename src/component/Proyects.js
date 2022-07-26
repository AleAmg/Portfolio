import TMDB from "./../assets/TMDB.png";

import hangmanGame from "./../assets/hangmanGame.png";
import clima from "./../assets/clima.jpg";
import lista from "./../assets/lista.png";
import color from "./../assets/color.jpg";
const Proyects = () => {
  return (
    <div className="container">
      <div className="proyects container__child">
        <div className="proyects__image">
          <div className="proyects__image--elem1 image__overlay">
            <div className="overlay">
              <p>AdFlower</p>
              <div className="overlay--links">
                <a href="https://github.com/AleAmg/Proyecto-Profesional_API-">
                  Link to back-end
                </a>
                <a href="https://github.com/AleAmg/Proyecto-Profesional_WEB">
                  Link to front-end
                </a>
              </div>
            </div>
            <img className="proyects__image--elem" src={TMDB} alt="TMDB"></img>
          </div>
          <div className="proyects__image--elem2 image__overlay">
            <div className="overlay">
              <p>Hangman Game</p>
              <div className="overlay--links">
                <a href="https://github.com/AleAmg/Proyecto-Profesional_API-">
                  Link to repository
                </a>
              </div>
            </div>
            <img
              className="proyects__image--elem"
              src={hangmanGame}
              alt="TMDB"
            ></img>
          </div>
          <div className="proyects__image--elem3 image__overlay">
            <div className="overlay">
              <p>La tienda del buhonero</p>
              <div className="overlay--links">
                <a href="https://github.com/AleAmg/Proyecto-Profesional_API-">
                  Link to repository
                </a>
              </div>
            </div>
            <img className="proyects__image--elem" src={TMDB} alt="TMDB"></img>
          </div>
          <div className="proyects__image--elem4 image__overlay">
            <div className="overlay">
              <p>TMDB</p>
              <div className="overlay--links">
                <a href="https://github.com/AleAmg/Proyecto-Profesional_API-">
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
                <a href="https://github.com/AleAmg/Proyecto-Profesional_API-">
                  Link to repository
                </a>
              </div>
            </div>
            <img className="proyects__image--elem" src={color} alt="TMDB"></img>
          </div>
          <div className="proyects__image--elem6 image__overlay">
            <div className="overlay">
              <p>To Do List</p>
              <div className="overlay--links">
                <a href="https://github.com/AleAmg/Proyecto-Profesional_API-">
                  Link to repository
                </a>
              </div>
            </div>
            <img className="proyects__image--elem" src={lista} alt="TMDB"></img>
          </div>
          <div className="proyects__image--elem7 image__overlay">
            <div className="overlay">
              <p>Weather Channel</p>
              <div className="overlay--links">
                <a href="https://github.com/AleAmg/Proyecto-Profesional_API-">
                  Link to repository
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
