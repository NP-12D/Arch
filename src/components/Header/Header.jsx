import Label from "../Label/Label";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import style from "./Header.module.css";
import { useState ,useEffect} from "react";
import { useLocation } from "react-router-dom";
export default function Header({ pageName }) {
  const [burger, setBurger] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;
  useEffect(() => {
      if (burger) {
        document.body.classList.add(style.no_scroll);
      } else {
        document.body.classList.remove(style.no_scroll);
      }
    }, [burger])

  return (
    <>
      <Label page={pageName}></Label>
      <header className={style.header}>
        <Link to="/">
          <img src={logo}></img>
        </Link>
        <nav className={`${style.nav} ${burger ? style.navactive : ""}`}>
          <Link
            to="/portfolio"
            className={pathname === "/portfolio" ? style.active : ""}
            onClick={() => setBurger(false)}
          >
            Portfolio
          </Link>
          <Link
            to="/about"
            className={pathname === "/about" ? style.active : ""}
            onClick={() => setBurger(false)}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={pathname === "/contact" ? style.active : ""}
            onClick={() => setBurger(false)}
          >
            Contact
          </Link>
          
        </nav>
        <div
          onClick={() => setBurger(!burger)}
          className={`${style.burger} ${burger ? style.burgeractive : ""}`}
        >
          <span className={style.line}></span>
          <span className={style.line}></span>
          <span className={style.line}></span>
        </div>
      </header>
      <div className={style.blackovelay} onClick={() => setBurger(false)}></div>
      
    </>
  );
}
