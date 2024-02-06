import { useEffect, useState } from "react";
import "./App.css";
import CardProject from "./components/CardProject";


function App() {

  return (
    <>
      <main >
        <header className="mainPage">
          <nav className="nav_header">
            <ul className="nav_container">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="projectCards">Projects</a>
              </li>
              <li>
                <a href="">About me</a>
              </li>
            </ul>
          </nav>
        </header>
        <section >
          <article className="HomePage">
            <div className="HomePage_Text">
              <h1 className="HomePage_Text_Name">Hola, soy Cesar</h1>
              <div className="text_container">
                <p >
                  ¡Hola! Soy un apasionado <span className="text_roll">Desarrollador Web FullStack</span> que utiliza tecnologías como <span className="text_roll">ReactJs, NodeJs, Express,</span> y manejo de datos con <span className="text_roll">Postgres</span>. Me esfuerzo por ser ejemplar en mi trabajo, creando soluciones innovadoras y eficientes.
                </p>
              </div>
            </div>
            <div className="HomePage_Social">
              <div className="social_section"><img className="social_icon" src="../public/images/linkedin.svg" alt="" /><a href="https://www.linkedin.com/in/cesar-david-montes-serna-b62724262/" target="_blank" >Linkedin</a></div>
              <div className="social_section"><img className="social_icon" src="../public/images/github.svg" alt="" /><a href="https://github.com/ElCesaqr00" target="_blank">Github</a>  </div>
              <div className="social_section"><img className="social_icon" src="../public/images/gmail.svg" alt="" /><a href="www.google.com" target="_blank">Email</a> </div>
            </div>
          </article>
          <article className="projects_container" id="projectCards">
            <h1 className="project_title">My projects</h1>
            <div className="Projects">
              <CardProject />
            </div>
          </article>
          <article className="info_aboutMe">
            <div className="info_aboutMe_text">
              <h2>Cesar David Montes Serna</h2>
              <p>¡Hola de nuevo! Me considero una persona dinámica, proactiva y muy responsable en las responsabilidades encomendadas a mí. Me gusta investigar información que tenga que ver con tecnología. He emprendido esta travesía como desarrollador, permitiéndome cumplir este deseo de pertenecer a esta industria. Espero ser de su agrado. </p>
            </div>
          </article>
        </section>
      </main>
    </>
  );

}


export default App;
