import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
const Redes = () => {
  return (
    <div className="social">
      <ul>
        <li className="social__icon">
          <a
            className="social__link social__link--git"
            href="https://github.com/AleAmg"
            
            target="_blank"
              rel="noreferrer"
          >
            <AiFillGithub />
          </a>
        </li>

        <li className="social__icon">
          <a
            className="social__link social__link--linkedIn"
            aria-hidden="true"
            href="https://www.linkedin.com/in/alexisgiozza/"
            
            target="_blank"
              rel="noreferrer"
          >
            <AiFillLinkedin />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Redes;
