import "../assets/Footer.css";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import youtube from "../assets/youtube.svg";

// je passe props au composant Footer:
function Footer(props) {
  return (
    <footer>
      <div className="icones">
        <img src={facebook} alt="Facebook" />
        <img src={instagram} alt="Instagram" />
        <img src={twitter} alt="Twitter" />
        <img src={youtube} alt="YouTube" />
      </div>
      
      <div className="textes">
        <ul>
          {/* apres je passe les colonnes menus footer sous forme de props */}
          {/* menu1 est une prop passée au composant parent ( App). */}
          {/* La méthode .map() est utilisée pour parcourir chaque élément du tableau menu1. */}
          {/* Elle prend une fonction en argument et retourne un nouveau tableau en fonction de ce que fait cette fonction. */}
          {/* element : représente la valeur de l'élément actuel dans menu1 */}

          {props.menu1.map(function (element) {
            return (
              <li>
                <a href="#">{element}</a>
              </li>
            );
          })}
        </ul>
        <ul>
          {props.menu2.map(function (element) {
            return (
              <li>
                <a href="#">{element}</a>
              </li>
            );
          })}
        </ul>
        <ul>
          <li>
            <a href="#">Centre d’aide</a>
          </li>
          <li>
            <a href="#">Recrutement</a>
          </li>
          <li>
            <a href="#">Préférences de cookies</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="">Cartes cadeaux</a>
          </li>
          <li>
            <a href="">Conditions d’utilisation</a>
          </li>
          <li>
            <a href="">Mentions légales</a>
          </li>
        </ul>
      </div>
      <a href="" className="bouton">
        Service code
      </a>
      <p>© 1997-2018 Netflix, Inc.</p>
    </footer>
  );
}

export default Footer;
