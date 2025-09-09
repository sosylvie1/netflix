import "../assets/sidebar.css";
import logo from "../assets/logo.png";
import dropdown from "../assets/dropdown.svg";
import notification from "../assets/notification.svg";
import search from "../assets/search.svg";
import avatar from "../assets/avatar.png";
import burger from "../assets/burger.svg";
import crayon from "../assets/crayon.png";
import transfert from "../assets/transfert.png";
import compte from "../assets/compte.png";
import aide from "../assets/aide.png";

import { useState } from "react";

function Sidebar() {
  const [dropdownActif, setDropdownActif] = useState(false);

  // Fermer le dropdown en cliquant en dehors
  const handleOutsideClick = (e) => {
    if (!e.target.closest(".dropdowncontainer")) {
      setDropdownActif(false);
    }
  };

  // Ajouter un event listener sur le document pour capturer les clics extérieurs
  useState(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <header>
      <div className="headerleft">
        <img className="logo" src={logo} alt="Netflix" />
        <nav>
          <a>Découverte</a>
          <a>Séries TV</a>
          <a>Films</a>
          <a>Programmes originaux</a>
          <a>Ajouts récents</a>
          <a>Ma liste</a>
        </nav>
      </div>
      <a className="burger">
        <img className="burgericon" src={burger} alt="Menu" />
      </a>
      <div className="headerright">
        <a>
          <img src={search} alt="Rechercher" />
        </a>
        <a>Jeunesse</a>
        <a>
          <img src={notification} alt="Notifications" />
         </a> 

        <div className="dropdowncontainer"> 
          {/* Bouton pour activer le dropdown */}
          <a
            className="avatar"
            href="#"
            onClick={(e) => {
              e.preventDefault(); // Empêche la navigation
              setDropdownActif(!dropdownActif); // Bascule l'état
            }}
          >
            <img src={avatar} alt="Avatar" />
            <img className="avatardropdown" src={dropdown} alt="Menu" />
          </a>

          {/* Menu Dropdown */}
          <div className={`dropdown__menu ${dropdownActif ? "active" : ""}`}>
            <a href="#">
              <img src={crayon} alt="Gérer les profils" />
              Gérer les profils
            </a>
            <a href="#">
              <img src={transfert} alt="Transférer un profil" />
              Transférer un profil
            </a>
            <a href="#">
              <img src={compte} alt="Compte" />
              Compte
            </a>
            <a href="#">
              <img src={aide} alt="Centre d'aide" />
              Centre d'aide
            </a>
            <div className="deco">
              <a href="#">Se déconnecter</a>
            </div>
          </div>
        </div>
       </div> 
    </header>
  );
}
export default Sidebar;
