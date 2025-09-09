import "../assets/Navbar.css";
import logo from "../assets/logo.png";
import dropdown from "../assets/dropdown.svg";
import notification from "../assets/notification.svg";
import search from "../assets/search.svg";
import avatar from "../assets/avatar.png";
import burger from "../assets/burger.svg";

import { useState } from "react";

function Navbar() {
  const [sidebarActif, setSidebarActif] = useState(false);

  // Fonction pour activer/désactiver la sidebar
  const toggleSidebar = () => {
    setSidebarActif(!sidebarActif);
  };

  // Fonction pour fermer la sidebar (appelée lorsqu'on clique à l'extérieur)
  const closeSidebar = () => {
    setSidebarActif(false);
  };

  return (
    <>
      {/* Navbar principale */}
      <header>
        <div className="header__left">
          <img className="logo" src={logo} alt="Netflix" />
          <nav>
          <a className="">Découverte</a>
          <a className="">Séries TV</a>
          <a className="">Films</a>
          <a className="">Programmes originaux</a>
          <a className="">Ajouts récents</a>
          <a className="">Ma liste</a>
          </nav>
        </div>
        <a className="burger" onClick={toggleSidebar}>
          <img className="burger__icon" src={burger} alt="Menu" />
        </a>
        <div className="header__right">
          <a>
            <img src={search} alt="Rechercher" />
          </a>
          <a>Jeunesse</a>
          <a>
            <img src={notification} alt="Notifications" />
          </a>
          <a className="avatar">
            <img src={avatar} alt="Avatar" />
            <img className="avatar__dropdown" src={dropdown} alt="Menu" />
          </a>
        </div>
      </header>

      {/* Overlay qui se ferme quand on clique dessus */}
      {sidebarActif && <div className="overlay" onClick={closeSidebar}></div>}

      {/* Sidebar */}
      <div className={`sidebar ${sidebarActif ? "active" : ""}`}>
        <a href="#">Gérer profil</a>
        <a href="#">Transférer un profil</a>
        <a href="#">Compte</a>
        <a href="#">Centre d'aide</a>
        <div className="deco">
              <a href="#">Se déconnecter</a>
            </div>
        {/* <button className="sidebar__close" onClick={closeSidebar}>
          Fermer
        </button> */}
      </div>
    </>
  );
}

export default Navbar;