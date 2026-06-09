import BigImgSection from "../components/BigImgSection/BigImgSection";
import HearoSection from "../components/HeroSection/HeroSection";
import TextImgSection from "../components/TextImgSection/TextImgSection";
import style from './Home.module.css'
import FeatureSection from "../components/FeatureSection/FeatureSection";

export default function Home(){
    return(
        
        <main className={style.home}>
    <HearoSection/>
    <TextImgSection/>
    <BigImgSection/>
   <FeatureSection/>
    </main> 
    
    )
}