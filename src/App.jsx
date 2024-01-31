import "./App.css";

function App() {
  return (
    <>
      <main className="mainPage">
        <header>
          <nav className="nav_header">
            <ul className="nav_container">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Projects</a>
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
            <a  className="social_section"><img className="social_icon" src="../public/images/linkedin.png" alt=""/><p>Linkedin</p></a>
            <div className="social_section"><img className="social_icon" src="../public/images/github.png" alt=""/><p>Github</p>  </div>
            <div className="social_section"><img className="social_icon" src="../public/images/gmail.png" alt=""/><p>Email</p> </div>
            </div>
          </article>
        </section>
      </main>
    </>
  );

}


export default App;
