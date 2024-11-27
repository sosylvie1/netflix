import "../assets/main2.css";
import cards1 from "../assets/cards1.svg";
import cards2 from "../assets/cards2.svg";
import image1 from "../assets/image1.svg";
import image2 from "../assets/image2.svg";
import image3 from "../assets/image3.svg";
import image4 from "../assets/image4.svg";
import image5 from "../assets/image5.svg";
import image6 from "../assets/image6.svg";
import image7 from "../assets/image7.svg";
import r2image1 from "../assets/r2image1.svg";
import r2image2 from "../assets/r2image2.svg";
import r2image3 from "../assets/r2image3.svg";
import r2image4 from "../assets/r2image4.svg";
import r2image5 from "../assets/r2image5.svg";
import r2image6 from "../assets/r2image6.svg";
import r2image7 from "../assets/r2image7.svg";
import bgpoland from "../assets/bgpoland.svg";
import xclose from "../assets/xclose.svg";
import Ida from "../assets/Ida.svg";
import kanal from "../assets/kanal.svg";
import couteau from "../assets/couteau.svg";
import vie from "../assets/vie.svg";
import war from "../assets/war.svg";
import marseille from "../assets/marseille.svg";
import poriginaux from "../assets/poriginaux.svg";
import stranger from "../assets/stranger.svg";
import cuba from "../assets/cuba.svg";
import fleche from "../assets/fleche.svg";
import alieniste from "../assets/alieniste.svg";
import secret from "../assets/secret.svg";
import soupcons from "../assets/soupcons.svg";
import caretdown from "../assets/caretdown.svg";
import age from "../assets/age.svg";
import polonais from "../assets/Polonais.svg";

// creation de ma variable row1
const row1 = [
  { src: image1, alt: "Image 1" },
  { src: image2, alt: "Image 2" },
  { src: image3, alt: "Image 3" },
  { src: image4, alt: "Image 4" },
  { src: image5, alt: "Image 5" },
  { src: image6, alt: "Image 6" },
  { src: image7, alt: "Image 7" },
  { src: image2, alt: "Image 2 (duplicate)" },
  { src: image4, alt: "Image 4 (duplicate)" },
];
// creation variable row2
const row2 = [
  { src: r2image1, alt: "Row 2 - Image 1" },
  { src: r2image2, alt: "Row 2 - Image 2" },
  { src: r2image3, alt: "Row 2 - Image 3" },
  { src: r2image4, alt: "Row 2 - Image 4" },
  { src: r2image5, alt: "Row 2 - Image 5" },
  { src: r2image6, alt: "Row 2 - Image 6" },
  { src: r2image7, alt: "Row 2 - Image 7" },
  { src: r2image2, alt: "Row 2 - Image 2 (duplicate)" },
  { src: r2image1, alt: "Row 2 - Image 1 (duplicate)" },
  { src: r2image4, alt: "Row 2 - Image 4 (duplicate)" },
];

// props sans destructuration # props destructuree function Main2({ title, row1 })
function Main2(props) {
  return (
    <div className="main">
      {/* <section> */}
      {/* props pour titre */}
      <h2 className="main-title">{props.titre}</h2>
      {/* <div className="main-image-container">
          <img className="main-image" src={cards1} alt="carteimage" /> */}
      <div className="images-row1">
        {/* props pour immage */}
        {props.row1.map((image, index) => (
          <div key={index} className="image-row1">
            <img src={image.src} alt={image.alt} className="main2-image" />
          </div>
        ))}
      </div>
      <h2 className="main-title">{props.titre2}</h2>
      <div className="images-row1">
        {props.row2.map((image, index) => (
          <div key={index} className="image-row1">
            <img src={image.src} alt={image.alt} className="main2-image" />
          </div>
        ))}
      </div>
      {/* container principal */}
      {/* <div
        className="poland"
        style={{ backgroundImage: "url(" + bgpoland + ")" }}
      > */}

      {/* Section detailspoland  */}

      <section className="details">
        {/* Image d'arrière-plan */}
        <img src={bgpoland} className="details__bg" />

        {/* Contenu superposé */}
        <div className="details__content">
          <img src={age} height="38" />
          <img className="details__title" src={polonais} height="61" />
          <h3>Netflix Découverte - Juillet 2018</h3>
          <p className="details__description">
            Andrzej Wajda, Roman Polański, Agnieszka Holland, Paweł Pawlikowski…
            Découvrez ceux qui ont fait connaitre le cinéma polonais sur la
            scène internationale.
          </p>
        </div>
      </section>

      {/* Section films  */}
      <section className="films">
        <div className="scrollable">
          <img src={Ida} alt="Ida" />
          <img src={vie} alt="vie" />
          <img src={war} alt="war" />
          <img src={couteau} alt="couteau" />
        </div>
      </section>
      {/* <div class="caroussel">
          <div className="films">
            <img src={Ida} alt="Film Ida" className="film-image" />
            <img src={vie} alt="Film Vie" className="film-image" />
            <img src={war} alt="Film Cold War" className="film-image" />
            <img src={couteau} alt="Film Couteau" className="film-image" />
          </div> */}
      {/* <div class="textes">
            <span className="film-Ftext">
              L'âge d'or du cinéma polonais (juillet 2018)
            </span>
            <span className="film-text">
              La nouvelle vague française (juin 2018)
            </span>
            <span className="film-text">Direction Cannes (mai 2018)</span>
            <span className="film-text">Bollywood Classiques (mai 2018)</span>
          </div> */}
      <section className="titres">
        <div className="scrollable">
          <a>L’âge d’or du cinéma polonais (juillet 2018)</a>
          <a>La nouvelle vague française (juin 2018)</a>
          <a>Direction Cannes (mai 2018)</a>
          <a>Bollywood Classiques (mai 2018)</a>
          <a>L’âge d’or du cinéma polonais (juillet 2018)</a>
          <a>La nouvelle vague française (juin 2018)</a>
          <a>Direction Cannes (mai 2018)</a>
          <a>Bollywood Classiques (mai 2018)</a>
        </div>
      </section>
      {/* Section programmes originaux  */}
      <section className="originaux">
        <h3>
          Programmes originaux Netflix
          <img src={fleche} class="fleche" />
        </h3>

        <div className="scrollable">
          <img src={marseille} alt="marseille" />
          <img src={secret} alt="secret" />
          <img src={stranger} alt="stranger" />
          <img src={cuba} alt="cuba" />
          <img src={alieniste} alt="alieniste" />
          <img src={soupcons} alt="soupcons" />
        </div>
      </section>

      {/* Section Catégories */}
      <section class="categories">
        <h3>Catégories</h3>
        <div class="scrollable">
          <div class="category">
            Comédie <img src={caretdown} />
          </div>
          <div class="category">
            Action <img src={caretdown} />{" "}
          </div>
          <div class="category">
            Drame <img src={caretdown} />
          </div>
          <div class="category">
            Sci-Fi <img src={caretdown} />
          </div>
          <div class="category">
            Romance <img src={caretdown} />
          </div>
          <div class="category">
            Thriller <img src={caretdown} />
          </div>
          <div class="category">
            Émissions <img src={caretdown} />
          </div>
          <div class="category">
            Horreur <img src={caretdown} />
          </div>
          <div class="category">
            Enfants <img src={caretdown} />
          </div>
          <div class="category">
            Documentaire <img src={caretdown} />
          </div>
        </div>
      </section>
    </div>
    // </div>
    // </div>
    // </div>
  );
}

export default Main2;
