import Skills from "../content/Skills";
import perfil from "./../assets/images/perfil.jpg";

const Profile = () => {
  return (
    <div className="container" id="about">
      <div className="profile container__child">
        <div className="profile__container--img">
          <img className="profile__image" src={perfil} alt="profileImg"></img>
        </div>
        <div className="profile__container--info">
          <div className="profile__info">
            <h1 className="profile__info--title">Sobre mi</h1>
            <p className="profile__info--text">
              Soy un full stack developer con preferencia al front-end, graduado
              recientemente del coding bootcamp de Plataforma 5 donde a lo largo
              de 14 semanas acumule un total de mas de 800 horas de experiencia;
              donde aprendí y puse en práctica distintas tecnologías.
            </p>
            <p className="profile__info--text">
              Actualmente estoy en búsqueda de mi primer trabajo como developer
              donde demostraré mis conocimientos, seguiré aprendiendo
              constantemente y desarrollaré nuevas habilidades.
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
