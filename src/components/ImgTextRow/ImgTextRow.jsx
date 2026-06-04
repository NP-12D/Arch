import styles from "./ImgTextRow.module.css";
export default function ImgTextRow() {
  return (
    <>
      <div className={styles.row}>
        <div className={styles.fortext}>
          <div>
          <h2 className={styles.header}>Our Heritage</h2>
          <p className={styles.text}>
            Founded in 2007, we started as a trio of architects. Our
            complimentary skills and relentless attention to detail turned Arch
            into one of the most sought after boutique firms in the country.
          </p>
          <p className={styles.text}>
            Speciliazing in Urban Design allowed us to focus on creating
            exceptional structures that live in harmony with their surroundings.
          </p>
          <p className={styles.text}>
            We consider every detail from every surrounding element to inform
            our designs. Our small team of world-class professionals provides
            input on every project.
          </p>
          </div>
        </div>
        <div className={styles.forimg}></div>
      </div>
    </>
  );
}
