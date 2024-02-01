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
              <p>
                Soy <span className="text_roll">Desarrollador Web FullStack,</span> soy dinamico y
                Resido en <span className="text_roll2">Cali-Colmbia,</span>
              </p>
            </div>
            <div className="HomePage_Social">
            <div className="social_section"><img className="social_icon" src="../public/images/linkedin.png" alt=""/><a href="https://www.linkedin.com/in/cesar-david-montes-serna-b62724262/" target="_blank" >Linkedin</a></div>
            <div className="social_section"><img className="social_icon" src="../public/images/github.png" alt=""/><a href="https://github.com/ElCesaqr00" target="_blank">Github</a>  </div>
            <div className="social_section"><img className="social_icon" src="../public/images/gmail.png" alt=""/><a href="www.google.com" target="_blank">Email</a> </div>
            </div>
          </article>
          <article className="projects_container" id="projectCards">
            <h1 className="project_title">My projects</h1>
          <div className="Projects">
            <CardProject />
          </div>
          </article>
        </section>
      </main>
    </>
  );

}


export default App;
