import styles from "./Leader.module.css";
import img1 from "../../assets/person1.png";
import img2 from "../../assets/person2.png";
import img3 from "../../assets/person3.png";
import img4 from "../../assets/person4.png";
import LeaderCard from "../LeaderCard/LeaderCard";
export default function Leader() {
  const leaders = [
    {
      id: 1,
      name: "Jake Richards",
      job: "Chief Architect",
      img: img1,
    },
    {
      id: 2,
      name: "Thompson Smith",
      job: "Head of Finance",
      img: img2,
    },
    {
      id: 3,
      name: "Jackson Rourke",
      job: "Lead Designer",
      img: img3,
    },
    {
      id: 4,
      name: "Maria Simpson",
      job: "Senior Architect",
      img: img4,
    },
  ];
  return (
    <>
      <div className={styles.row}>
        <div className={styles.text}>The Leaders</div>
        <div className={styles.container}>
          {leaders.map((item) => (
            <LeaderCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}
