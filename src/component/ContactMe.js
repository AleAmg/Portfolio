const ContactMe = () => {
  return (
    <div className="container" id="contact">
      <div className="container__child contactMe">
        <h1 className="contactMe__title">Contact Me</h1>
        <form
          className="contactMe__form"
          action="https://formspree.io/f/xdoybgen"
          method="POST"
        >
          <input
            className="contactMe__child"
            name="name"
            type="text"
            placeholder="Nombre"
            required
          ></input>
          <input
            className="contactMe__child"
            name="mail"
            type="mail"
            placeholder="Mail"
            required
          ></input>
          <textarea
            className="contactMe__child contactMe__textarea"
            required
            minLength="5"
            name="messege"
            placeholder="Mensaje"
          ></textarea>
          <button className="contactMe__child contactMe__button">Enviar</button>
        </form>
      </div>
    </div>
  );
};
export default ContactMe;
