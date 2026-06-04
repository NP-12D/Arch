import PortfolioCard from "../PortfolioCard/PortfolioCard";
import style from "./PortfolioContainer.module.css";

export default function PortfolioContainer({ arr }) {
  return (
    <section className={style.portfolioContainer}>
      {arr.map((item) => (
        <PortfolioCard key={item.id} item={item} />
      ))}
    </section>
  );
}
