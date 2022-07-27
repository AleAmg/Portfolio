import cv from "./../assets/pdf/cv.pdf";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineDownload,
} from "react-icons/ai";
const Footer = () => {
  return (
    <div className="container__footer">
      <div className="footer container__child">
        <div className="footer__container--elem">
          <div className="footer__elem">
            <a href={cv} download="alexis-giozza-cv">
              <AiOutlineDownload /> Descargar Cv
            </a>
          </div>
          <div className="footer__elem">
            <a
              href="https://github.com/AleAmg"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub /> /AleAmg
            </a>
          </div>
          <div className="footer__elem">
            <a
              href="https://www.linkedin.com/in/alexisgiozza/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin /> /in/alexisgiozza
            </a>
          </div>
        </div>
        <div className="footer__container--elem">
          <div className="footer__elem">
            <AiOutlineMail /> alexisgiozza@gmail.com
          </div>
          <div className="footer__elem">
            <AiOutlinePhone /> + 54 9 11 3928-0005
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
