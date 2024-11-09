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
                <a href="#certificateCards">Certificados</a>
              </li>
              <li className="listText">
                <a href="#contactSection">Contacto</a>
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
                  me considero una persona dinámica, proactiva y muy responsable
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
                target="_blank" rel="noreferrer"
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
                target="_blank" rel="noreferrer"
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
                target="_blank" rel="noreferrer"
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
            <h1>Tecnologías</h1>
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
      <footer>
        <div className="contactSection" id="contactSection">
          <h3 className="titleContact">Contactame</h3>
      <form action="https://formsubmit.co/cesarmontes0842@gmail.com" method="post" name="form1">
          <ul>
            <li className='inputList'>
              <input id="nombre" name="nombre" type="text" placeholder='Nombre'/>
            </li>
            <li className='inputList'>
              <input id="email" name="nombre" type="text" placeholder='Email'/>
            </li>
            <li>
              <textarea id="opinion" name="opinion" placeholder='Deja aquí tu mensaje'></textarea>
            </li>
          </ul>
          <div className="send-buttom">
            <input name="send" type="submit" value="Enviar" />
          </div>
        </form>
        </div>
        <div>
        <h3 >Información personal</h3>
        <ul>
          <li>
            <h4 className='sub-title'>Nombre: </h4> <p>Cesar D. Montes</p>
          </li>
          <li>
            <h4 className='sub-title'>Email: </h4> <p>Cesarmontes0842@gmail.com</p>
          </li>
          <li>
            <h4 className='sub-title'>Ubicación: </h4> <a href='https://www.google.com.ar/maps/place/Santiago,+Regi%C3%B3n+Metropolitana'>Santiago, Region Metropolitana, Chile.</a>
          </li>
        </ul>
        </div>
      </footer>
    </>
  );
}

export default App;
