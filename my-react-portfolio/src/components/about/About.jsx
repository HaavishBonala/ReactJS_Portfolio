import React from "react";
import "./about.css";
import AboutImg from "../../assets/about.jpg";
import Info from "./Info";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My Introduction</span>

      <div className="about__container container grid">
        <img src={AboutImg} alt="" className="about__img" />

        <div className="about__data">
          <Info />

          <p className="about__description">
            Anim adipisicing magna voluptate do veniam consequat in esse
            consequat. Duis nulla in culpa et pariatur eu consequat ex anim est
            sint. Qui esse culpa qui consequat anim aliqua dolore ad ipsum
            laboris ullamco magna pariatur. Non cillum laborum eu irure pariatur
            ipsum et exercitation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
