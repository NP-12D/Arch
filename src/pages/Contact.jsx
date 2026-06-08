import styles from "./Contact.module.css";
import AboutContacthero from "../components/AboutContacthero/Hero";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
export default function Contact() {
  const item = {
    header: "Tell us about your project",
    text: "We’d love to hear more about your project. Please, leave a message below or give us a call. We have two offices, one in Texas and one in Tennessee. If you find yourself nearby, come say hello!",
    img: "/AboutContact2.png",
    pagename: "Contact",
  };
  return (
    <main className={styles.contact}>
      <Header pageName="CONTACT" />
      <AboutContacthero item={item} />
      <div className={styles.contactinfo}>
        <h1>Contact Details</h1>
        <div className={styles.contactdetails}>
          <div className={styles.contactitem}>
            <div>
              <h2>Main Office</h2>
              <p>
                Mail: <a href="mailto:archone@mail.com">archone@mail.com</a>
              </p>
              <p>
                Address : <a href="#">1892 Chenoweth Drive TN</a>
              </p>
              <p>
                Phone : <a href="cal:123-456-3451">123-456-3451</a>
              </p>
            </div>
            <button className={styles.mapbutton}>View on Map</button>
          </div>
          <div className={styles.contactitem}>
            <div>
              <h2>Office II</h2>
              <p>
                Mail: <a href="mailto:archone@mail.com">archone@mail.com</a>
              </p>
              <p>
                Address : <a href="#">1892 Chenoweth Drive TN</a>
              </p>
              <p>
                Phone : <a href="cal:123-456-3451">123-456-3451</a>
              </p>
            </div>
            <button className={styles.mapbutton}>View on Map</button>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
