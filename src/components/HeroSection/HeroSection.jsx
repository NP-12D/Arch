import style from "./HeroSection.module.css";
import { useState } from "react";
import {useNavigate} from 'react-router-dom'
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import Button from "../Button/Button";
import BtnsRow from "../BtnsRow/BtnsRow";
export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate()
  let SlidesInfo = [
    {
      id: "1",
      projectName: "Project Paramour",
      description:
        "Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.",
      image: img1,
    },
    {
      id: "2",
      projectName: "Seraph Station",
      description:
        "A complex architectural design that merges urban transit with sustainable space.",
      image: img2,
    },
    {
      id: "3",
      projectName: "Federal II Tower",
      description:
        "A high-rise commercial structure with a striking, glass-dominated facade.",
      image: img3,
    },
    {
      id: "4",
      projectName: "Trinity Bank Tower",
      description:
        "Trinity Bank, constructed in the middle of the city, acts as a landmark for modern finance.",
      image: img4,
    },
  ];
  return (
    <>
      <section className={style.heroSection}>
        <div
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url(${SlidesInfo[currentSlide].image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className={style.slide}
        >
            <div className={style.overlay}>
          <div className={style.fortext}>
            <h1>{SlidesInfo[currentSlide].projectName}</h1>
            <p>{SlidesInfo[currentSlide].description}</p>
          </div>
          <Button text="See Our Portfolio" onClick={()=>navigate("/portfolio")}></Button>
          </div>
          <BtnsRow slide={currentSlide} onClick={setCurrentSlide} />
        </div>
        <h2 className="mainheader">Welcome</h2>
      </section>
    </>
  );
}
