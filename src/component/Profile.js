import perfil from "./../assets/perfil.jpg";

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
            <p className="profile__info--text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
