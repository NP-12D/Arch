import Label from "../Label/Label";
import {Link} from 'react-router-dom'
import logo from '../../assets/logo.svg'
import style from './Header.module.css' 

export default function Header({pageName}) {
    return(<>
    <Label page={pageName}></Label>
    <header className={style.header}>
        <Link to='/'><img src={logo}></img></Link>
        <nav className={style.nav}>
        <Link to='/portfolio'>Portfolio</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        </nav>
   
    </header>
   
    </>)
}