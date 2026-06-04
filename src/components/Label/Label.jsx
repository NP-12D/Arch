import style from './Label.module.css'  
export default function Label({page}){
    return(<>
    <div className={style.label}>
        <span></span>
        <h2>{page}</h2>
        
    </div>
    </>)
}