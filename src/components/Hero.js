// import hero from "../assets/narcos.jpg";
import "../assets/Hero2.css";
import narcos from "../assets/narcos.jpg";
import logonarcos from "../assets/logonarcos.svg";

function Hero() {
  return (
    // <div className="banner">
    //   <div className="banner-content">
    //     <h1>Narcos</h1>
    //     <p>Une plongée captivante dans le cartel de Medellín. On a adoré</p>
    //     <div className="banner-buttons">
    //       <button>Lecture</button>
    //       <button>Ma liste</button>
    //     </div>
    //   </div>
    // </div>
    <div className="banner">
      {/* <img className="narcos" src={narcos} alt="narcos" /> */}

      <div className="banner-content">
        <div className="titre">
          <img src={logonarcos} alt="logonarcos" />
        </div>
        <div classname="texte-descript">
          <p>Une plongée captivante dans le cartel de Medellín.</p>
        </div>
        <div className="banner-buttons">
          <button>Lecture</button>
          <button>Ma liste</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
