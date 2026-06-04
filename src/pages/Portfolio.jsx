import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import PortfolioContainer from "../components/PortfolioContainer/PortfolioContainer";
import PortfolioData from "../components/PortfolioiData";
import style from "./Portfolio.module.css";
export default function About() {
  console.log(PortfolioData);
  return (
    <>
      <main className={style.portfolio}>
        <Header pageName="PORTFOLIO" />
        <PortfolioContainer arr={PortfolioData} />
        <div className={style.footer}>
        <Footer />
        </div>
      </main>
    </>
  );
}
