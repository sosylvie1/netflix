import "../assets/main.css";
import cards1 from "../assets/cards1.svg";
import cards2 from "../assets/cards2.svg";

function Main({ title }) {
  return (
    <div className="main">
      <h2 className="main-title">{title}</h2>
      <div className="main-image-container">
        <img className="main-image" img src={cards1} alt="carteimage" />
      </div>
      <div className="main-image-container">
        <img className="main-image2" img src={cards2} alt="carteimage" />
      </div>
    </div>
  );
}

export default Main;
