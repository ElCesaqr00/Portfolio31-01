import "./App.css";
import CardCertificate from "./components/CardCertificate";
import CardProject from "./components/CardProject";
import CvDownload from "./components/CvDownload";
import TecnoCard from "./components/TecnoCard";

function App() {
  return (
    <>
      <main>
      <a href="https://wa.me/573235289093?text=Hola%20amigo,%20Me%20gustaria%20contactarte">
        <img className="icon_chat" src="../images/whatsapp.avif" alt="" />
      </a>
      <a href="mailto:cesarmontes0842@gmail.com">
        <img className="icon_email" src="../images/gmail.avif" alt="" />
      </a>

        <header className="mainPage">
          <CvDownload />
          <nav className="nav_header">
            <ul className="nav_container">
              <li className="listText">
                <a href="#homepageId">Inicio</a>
              </li>
              <li className="listText">
                <a href="#projectCards">Proyectos</a>
              </li>
              <li className="listText">
                <a href="#certificateCards">certificados</a>
              </li>
              <li className="listText">
                <a href="#info_aboutMe">Contacto</a>
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
                  <span className="text_roll">Desarrollador Web FullStack,</span>{" "}
                  Me considero una persona dinámica, proactiva y muy responsable
                  en las tareas encomendadas a mí. Me gusta investigar
                  información que tenga que ver con tecnología. He emprendido
                  esta travesía como desarrollador, permitiéndome cumplir este
                  deseo de pertenecer a esta industria. Espero ser de su agrado
                  y estoy emocionado por seguir creciendo en esta apasionante
                  área. ¡Gracias por visitar mi portafolio!
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
                href="mailto:cesarmontes0842@gmail.com"
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
          <article className="info_aboutMe">
            <h1>Tecnologias</h1>
            <TecnoCard />
          
          </article>

          <article className="projects_container" id="projectCards">
            <article className="container_prj">
            <h1 className="project_title">Proyectos</h1>
            <section className="Projects">
              <CardProject />
            </section>
            </article>
          </article>
          <article className="certificate_container" id="certificateCards">
            <h1 className="certificate_title">Certificados</h1>
            <section className="certificate_info">
              <CardCertificate />
            </section>
          </article>

        </section>
      </main>
    </>
  );
}

export default App;
