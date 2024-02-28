import Skills from "../content/Skills";
import perfil from "./../assets/images/perfil.jpg";
import ar from "./../assets/images/ar.jpg";

const Profile = () => {
  return (
    <div className="container" id="about">
      <h1 className="profile__info--title">Sobre mi</h1>
      <div className="profile profile_info container__child">
        <div className="profile__container--img">
          <img className="profile__image" src={perfil} alt="profileImg"></img>
        </div>
        <div className="profile__container--info">
          <div className="profile__info">
            <p className="profile__info--text">
              Soy un full stack developer con conocimiento de distintas
              tecnologías, luego de realizar el bootcamp de plataforma 5 decidi
              ingresar en la universidad nacional del oeste para poder aumentar
              mi conocimiento en el área IT
            </p>
          </div>
        </div>
      </div>
      <div className="profile profile_info container__child">
        <div className="profile__container--img">
          <img className="profile__image" src={ar} alt="profileImg"></img>
        </div>
        <div className="profile__container--info">
          <div className="profile__info">
            <p className="profile__info--text">
              Soy un full stack developer con conocimiento de distintas
              tecnologías, luego de realizar el bootcamp de plataforma 5 decidi
              ingresar en la universidad nacional del oeste para poder aumentar
              mi conocimiento en el área IT
            </p>
          </div>
        </div>
      </div>
      <div className="profile container__child">
        <Skills />
      </div>
    </div>
  );
};
export default Profile;
