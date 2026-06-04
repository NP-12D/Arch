import style from './Button.module.css'
import arrow from '../../assets/arrow.svg'
export default function Button({text, onClick}){
    return(<>
    <button onClick={onClick} className={style.btn}>{text} <img src={arrow}/></button>
    </>)
}