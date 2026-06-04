import styles from "./LeaderCard.module.css"
export default function LeaderCard({item}){
    return(<>
    <div className={styles.card}>
        <div className={styles.img} >
            <img src={item.img} alt={item.name}/>
        </div>
        <div className={styles.text}>
            <h2>{item.name}</h2>
            <p>{item.job}</p>
        </div>
    </div></>)
}