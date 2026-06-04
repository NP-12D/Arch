

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import PortfolioData from"../components/PortfolioiData";
import ImgTextRow from "../components/ImgTextRow/ImgTextRow";
import style from "./About.module.css"
export default function About() {
     console.log(PortfolioData);
  return (
    <>
    <main className={style.about}>
   <Header pageName="ABOUT"/>
     <ImgTextRow></ImgTextRow>
   <Footer/>
   </main>
    </>
  );
}
