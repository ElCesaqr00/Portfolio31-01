import "./App.css";
import CardCertificate from "./components/CardCertificate";
import CardProject from "./components/CardProject";

function App() {
  return (
    <>
      <main>
        <header className="mainPage">
          <nav className="nav_header">
            <ul className="nav_container">
              <li className="test11">
                <a href="#homepageId">Home</a>
              </li>
              <li>
                <a href="#projectCards">Projects</a>
              </li>
              <li>
                <a href="#certificateCards">Certificates</a>
              </li>
              <li>
                <a href="#info_aboutMe">About me</a>
              </li>
            </ul>
          </nav>
        </header>
        <section>
          <article className="HomePage" id="homepageId">
            <article className="HomePage_Text">
              <h1 className="HomePage_Text_Name">Hola, soy Cesar</h1>
              <article className="text_container">
                <p>
                  ¡Hola! Soy un apasionado{" "}
                  <span className="text_roll">Desarrollador Web FullStack</span>{" "}
                  que utiliza tecnologías como{" "}
                  <span className="text_roll">ReactJs, NodeJs, Express,</span> y
                  manejo de datos con{" "}
                  <span className="text_roll">Postgres</span>. Me esfuerzo por
                  ser ejemplar en mi trabajo, creando soluciones innovadoras y
                  eficientes.
                </p>
              </article>
            </article>
            <section className="HomePage_Social">
              <a
                className="Social_Links1"
                href="https://www.linkedin.com/in/cesar-david-montes-serna-b62724262/"
                target="_blank"
              >
                <article className="social_section">
                  <img
                    className="social_icon"
                    src="../images/linkedin.avif"
                    alt=""
                  />
                  <p>Linkedin</p>
                </article>
              </a>
              <a
                className="Social_Links1"
                href="https://github.com/ElCesaqr00"
                target="_blank"
              >
                <article className="social_section">
                  <img
                    className="social_icon"
                    src="../images/github.avif"
                    alt=""
                  />
                  <p>Github</p>
                </article>
              </a>
              <a
                className="Social_Links1"
                href="www.google.com"
                target="_blank"
              >
                <article className="social_section">
                  <img
                    className="social_icon"
                    src="../images/gmail.avif"
                    alt=""
                  />
                  <p>Email</p>
                </article>
              </a>
            </section>
          </article>
          <article className="projects_container" id="projectCards">
            <h1 className="project_title">My projects</h1>
            <section className="Projects">
              <CardProject />
            </section>
          </article>
          <article className="certificate_container" id="certificateCards">
            <h1 className="certificate_title">Certificates</h1>
            <section className="certificate_info">
              <CardCertificate />
            </section>
          </article>
          <article className="info_aboutMe">
            <article className="info_aboutMe_text" id="info_aboutMe">
              <h2>Cesar David Montes Serna</h2>
              <p>
                ¡Hola de nuevo! Me considero una persona dinámica, proactiva y
                muy responsable en las tareas encomendadas a mí. Me gusta
                investigar información que tenga que ver con tecnología. He
                emprendido esta travesía como desarrollador, permitiéndome
                cumplir este deseo de pertenecer a esta industria. Espero ser de
                su agrado y estoy emocionado por seguir creciendo en esta
                apasionante área. ¡Gracias por visitar mi portafolio!
              </p>
            </article>
          </article>
        </section>
      </main>
    </>
  );
}

export default App;
