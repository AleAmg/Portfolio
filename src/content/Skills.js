import html from "./../assets/logos/html-5.svg";
import css from "./../assets/logos/css-3.svg";
import sass from "./../assets/logos/sass.svg";
import js from "./../assets/logos/javascript.svg";
import react from "./../assets/logos/react.svg";
import redux from "./../assets/logos/redux.svg";
import node from "./../assets/logos/nodejs-icon.svg";
import express from "./../assets/logos/express.svg";
import sequelize from "./../assets/logos/sequelize.svg";
import mongo from "./../assets/logos/mongodb-icon.svg";
import postgres from "./../assets/logos/postgresql.svg";
import github from "./../assets/logos/github-icon.svg";

const Skills = () => {
  return (
    <div>
      <h1 className="proyects__info--title">Skills</h1>
      <div className="profile__skills--container">
        <img className="profile__skills" src={html} alt="html"></img>
        <img className="profile__skills" src={css} alt="css"></img>
        <img className="profile__skills" src={sass} alt="sass"></img>
        <img className="profile__skills" src={js} alt="js"></img>
        <img
          className="profile__skills profile__skills--react"
          src={react}
          alt="react"
        ></img>
        <img className="profile__skills" src={redux} alt="redux"></img>
        <img className="profile__skills" src={node} alt="node"></img>
        <img className="profile__skills" src={express} alt="express"></img>
        <img className="profile__skills" src={sequelize} alt="sequelize"></img>
        <img className="profile__skills" src={mongo} alt="mongo"></img>
        <img className="profile__skills" src={postgres} alt="postgre"></img>
        <img className="profile__skills" src={github} alt="github"></img>
      </div>
    </div>
  );
};
export default Skills;
