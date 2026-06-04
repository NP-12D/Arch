import styles from './TextImgSection.module.css';
import img from '../../assets/TextImg1.png'
export default function TextImgSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        <div className={styles.contentSide}>
         
          <h2 className={styles.header}>
            Welcome to Arch Studio
          </h2>
          
          <p className={styles.text}>
            We have a unique network and skillset to help bring your projects to life. Our small team of highly skilled individuals combined with our large network put us in a strong position to deliver exceptional results.
          </p>
          <p className={styles.text}>
            Over the past 10 years, we have worked on all kinds of projects. From stations to high-rise buildings, we create spaces that inspire and delight.
          </p>
          <p className={styles.text}>
            We work closely with our clients so that we understand the intricacies of each project. This allows us to work in harmony the surrounding area to create truly stunning projects that will stand the test of time.
          </p>
          
        </div>

        <div className={styles.imageSide}>
          <img src={img}/>
        </div>
      </div>
    </section>
  );
}
