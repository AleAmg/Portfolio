import Skills from "../content/Skills";
import perfil from "./../assets/images/perfil.jpg";

const Profile = () => {
  return (
    <div className="container">
      <div className="profile container__child">
        <div className="profile__container--img">
          <img className="profile__image" src={perfil} alt="profileImg"></img>
        </div>
        <div className="profile__container--info">
          <div className="profile__info">
            <h1 className="profile__info--title">Sobre mi</h1>
            {/* <p className="profile__info--text">
              Conocí la programación en una charla con un primo, me comentó lo
              que era y lo más básico para arrancar. Ese mismo día comencé a ver
              vídeos tutoriales de HTML y CSS en YouTube; cuando ponía en
              práctica lo que había visto me di cuenta que estaba muy
              interesante lo que me llevó a querer aprender más y más. Al poco
              tiempo realicé un curso donde aprendí JavaScript y su lógica.
            </p>
            <p className="profile__info--text">
              A comienzo de este año realize el Coding bootcamp de Plataforma 5
              donde gane mas de 800 horas de experiencia además de ganar una
              gran capacidad de aprendizaje al aprender algo nuevo todos los
              dias y ponerlo en practica.
            </p> */}
            <p className="profile__info--text">
              Soy un full stack developer con preferencia al front-end, graduado
              recientemente del coding bootcamp de Plataforma 5 donde a lo largo
              de 14 semanas acumule un total de mas de 800 horas de experiencia;
              donde aprendi y puse en practica distintas tecnologias.
            </p>
            <p className="profile__info--text">
              Actualmente estoy en búsqueda de mi primer trabajo como developer
              donde demostrare mis conocimientos, seguire aprendiendo
              constantemente y desarrollare nuevas habilidades.
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
