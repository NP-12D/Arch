
import styles from "./Contact.module.css"
import AboutContacthero from "../components/AboutContacthero/Hero";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
export default function Contact() {
    const item={
    header:"Tell us about your project",
    text:"We’d love to hear more about your project. Please, leave a message below or give us a call. We have two offices, one in Texas and one in Tennessee. If you find yourself nearby, come say hello!",
    img:"/AboutContact2.png",
    pagename:"Contact",
  }
  return (
    <main className={styles.contact}>
      <Header pageName="CONTACT"/>
      <AboutContacthero item={item}/>
      <Footer/>
    </main>
  )
}