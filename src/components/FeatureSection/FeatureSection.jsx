import Button from "../Button/Button";
import styles from "./FeatureSection.module.css";
import {useNavigate} from "react-router-dom";
import PortfolioContainer from "../PortfolioContainer/PortfolioContainer";
import PortfolioData from "../PortfolioiData";
export default function FeatureSection() {
    const navigate = useNavigate(); 
  return (
    <>
      <section className={styles.section}>
        <div className={styles.featured}><h2>Featured</h2>
        <Button text="See All" onClick={()=>navigate("/portfolio")}></Button></div>
         <PortfolioContainer arr={PortfolioData.slice(0,3)}/>
            <Button  text="See All" onClick={()=>navigate("/portfolio")}></Button>
      </section>
    </>
  );
}
