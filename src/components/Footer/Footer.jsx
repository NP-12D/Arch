import style from './Footer.module.css';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';
export default function Footer(){
    const navigate = useNavigate();
    return(<>
    <footer className={style.footer}>
        <div className={style.logo}>
            
        </div>
        <nav className={style.nav}>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
             <div className={style.btn}>
        <Button text="See Our Portfolio" onClick={()=>navigate("/portfolio")} />
       </div>
        </nav>
       
    </footer>
    </>)
}