import "../assets/Hero.css";

import narcos from "../assets/narcos.jpg";
import logonarcos from "../assets/logonarcos.svg";

function Hero() {
  return (
    <div className="hero">
      <img className="hero-back" src={narcos} alt="Narcos" />
      <div className="hero-content">
        {/* Tout le contenu est centré */}
        <div className="hero-top">
          <span className="hero-original">NETFLIX ORIGINAL</span>
          <h1 className="hero-titre">NARCOS</h1>
          {/* <img className="logo" src={logonarcos} alt="Narcos Logo" /> */}
          <p className="hero-subtitle">Regardez la saison 3 maintenant</p>
        </div>

        <p className="hero-description">
          Le cartel de Cali reprend le pouvoir en Colombie. Les successeurs
          d'Escobar passent à l'action et déclarent la guerre au gouvernement.
        </p>

        <div className="hero-buttons">
          <button className="hero-btn play-btn">► Lecture</button>
          <button className="hero-btn list-btn">+ Ma liste</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
