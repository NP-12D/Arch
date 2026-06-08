import styles from "./Contact.module.css";
import AboutContacthero from "../components/AboutContacthero/Hero";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import ContactForm from "../components/ContactForm/ContactForm";
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
                Phone : <a href="tel:123-456-3451">123-456-3451</a>
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
                Phone : <a href="tel:123-456-3451">123-456-3451</a>
              </p>
            </div>
            <button className={styles.mapbutton}>View on Map</button>
          </div>
        </div>
      </div>
      <div className={styles.map}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3106.924995064334!2d-78.14309835476865!3d38.85707387643792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b5cfbe8fdd760d%3A0x3856e12aa6ff0e82!2sWines%20Ln%2C%20Chester%20Gap%2C%20VA%2022623%2C%20USA!5e0!3m2!1sen!2sge!4v1780924739833!5m2!1sen!2sge" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy" ></iframe>
      </div>
      <ContactForm/>
      <Footer />
    </main>
  );
}
