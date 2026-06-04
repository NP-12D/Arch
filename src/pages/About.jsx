

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import PortfolioData from"../components/PortfolioiData";
import ImgTextRow from "../components/ImgTextRow/ImgTextRow";
import style from "./About.module.css"
import Leader from "../components/Leaders/Leader";
import Hero from "../components/AboutContacthero/Hero";
export default function About() {
  const item={
    header:"Your team of professionals",
    text:"Our small team of world-class professionals will work with you every step of the way. Strong relationships are at the core of everything we do. This extends to the relationship our projects have with their surroundings.",
    img:"/AboutContact1.png",
    pagename:"About",
  }
     console.log(PortfolioData);
  return (
    <>
    <main className={style.about}>
   <Header pageName="ABOUT"/>
   <Hero item={item}/>
     <ImgTextRow></ImgTextRow>
     <Leader/>
   <Footer/>
   </main>
    </>
  );
}
