import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Main2 from "./components/Main2";
import narcos from "./assets/narcos.jpg";
import cards1 from "./assets/cards1.svg";
import image1 from "./assets/image1.svg";
import image2 from "./assets/image2.svg";
import image3 from "./assets/image3.svg";
import image4 from "./assets/image4.svg";
import image5 from "./assets/image5.svg";
import image6 from "./assets/image6.svg";
import image7 from "./assets/image7.svg";
import r2image1 from "./assets/r2image1.svg";
import r2image2 from "./assets/r2image2.svg";
import r2image3 from "./assets/r2image3.svg";
import r2image4 from "./assets/r2image4.svg";
import r2image5 from "./assets/r2image5.svg";
import r2image6 from "./assets/r2image6.svg";
import r2image7 from "./assets/r2image7.svg";
import bgpoland from "./assets/bgpoland.svg";
import xclose from "./assets/xclose.svg";
import Ida from "./assets/Ida.svg";
import kanal from "./assets/kanal.svg";
import couteau from "./assets/couteau.svg";
import vie from "./assets/vie.svg";
import war from "./assets/war.svg";

function App() {
  // je créée des variables menu sous forme de tableau parceque sur mon site ul et li
  const menu1 = [
    "Audio et sous-titres",
    "Presse",
    "Confidentialité",
    "Nous contacter",
  ];
  const menu2 = [
    "Autodescription",
    "Relations investisseurs ",
    "Informations légales",
  ];
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

  //  A FAIRE CONST IMAGE IDEM QUE CI DESSUS ET FAIRE PROPS SUR MAINS SECTION 2 ET RAPPELLE LA VARIABLE DANS MAIN2
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Main2
        titre="Revoir"
        row1={row1}
        titre2="Tendances actuelles"
        row2={row2}
      />
      {/* je rappelle la variable dans footer  */}
      <Footer menu1={menu1} menu2={menu2} />
    </div>
  );
}

export default App;
