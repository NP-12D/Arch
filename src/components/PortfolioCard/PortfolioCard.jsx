import style from "./PortfolioCard.module.css";
import { useLocation } from "react-router-dom";

export default function PortfolioCard({ item }) {
  const location = useLocation();

  return (
    <div
      className={style.card}
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${item.img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h3 className={style.num}>
        {!location.pathname.includes("portfolio") && item.number}
      </h3>

      <div className={style.text}>
        <h2>{item.title}</h2>
        <p>{item.date}</p>
      </div>
    </div>
  );
}
