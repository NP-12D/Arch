import BigImgSection from "../components/BigImgSection/BigImgSection";
import Header from "../components/Header/Header";
import HearoSection from "../components/HeroSection/HeroSection";
import TextImgSection from "../components/TextImgSection/TextImgSection";
import Footer from "../components/Footer/Footer";
import style from './Home.module.css'
import FeatureSection from "../components/FeatureSection/FeatureSection";

export default function Home(){
    return(
        
        <main className={style.home}>
    <Header pageName="HOME"/>
    <HearoSection/>
    <TextImgSection/>
    <BigImgSection/>
   <FeatureSection/>
    <Footer/>
    </main> 
    
    )
}