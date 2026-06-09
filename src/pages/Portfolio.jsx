import PortfolioContainer from "../components/PortfolioContainer/PortfolioContainer";
import PortfolioData from "../components/PortfolioiData";
import style from "./Portfolio.module.css";
export default function About() {
  console.log(PortfolioData);
  return (
    <>
      <main className={style.portfolio}>
        <PortfolioContainer arr={PortfolioData} />
        <div className={style.footer}>
        </div>
      </main>
    </>
  );
}
