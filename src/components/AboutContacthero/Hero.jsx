import styles from "./Hero.module.css"
export default function Hero({item}){
    return(<>
    <div className={styles.section}>
        <div className={styles.img}>
            <img src={item.img} alt={item.header}/>
        </div>
        <div className={styles.text}>
            <h2 className="mainheader">{item.pagename}</h2>
            <div className={styles.textcontainer}>
            <h1>{item.header}</h1>
            <p>{item.text}</p>
            </div>
        </div>
    </div>
    </>
)}