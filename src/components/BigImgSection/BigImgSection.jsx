import Button from "../Button/Button";
import styles from "./BigImgSection.module.css";
import { useNavigate } from "react-router-dom";
export default function BigImgSection() {
  const navigate = useNavigate();
  return(  <div className={styles.section}>
    <div className={styles.container}>
      <h1>Small team, big ideas</h1>
      <div className={styles.btn}>
      <Button text="About Us" onClick={()=>navigate("/about")} />
        </div>
    </div>
  </div>)

}
