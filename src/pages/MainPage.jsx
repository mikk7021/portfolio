import { HomeContent } from "../components/homecontent/HomeContent"
import { NavBar } from "../components/nav/NavBar"
import { useRef } from "react"
import { AboutContent } from "../components/aboutcontent/AboutContent"
import { ContactContent } from "../components/contactcontent/ContactContent"
import Style from './MainPage.module.scss'
import img1 from "../assets/images/bagerietsnip.webp"
import img2 from "../assets/images/HomeLandssnip.webp"
import img3 from "../assets/images/spainsnip.webp"
import img4 from "../assets/images/teatersnip.webp"

export const MainPage = () => {

    
    const homeRef = useRef()
    const aboutRef = useRef()
    const contactRef = useRef()

    const linkArray = [
        {title: "HOME", link: "#title", ref: homeRef},
        {title: "ABOUT", link: "#about", ref: aboutRef},
        {title: "CONTACT", link: "#contact", ref: contactRef}
    ]

    
    const carouselItems = [
        {
            url: img1,
            alt: "Bageriet"
        },
        {
            url: img2,
            alt: "Homelands"
        },
        {
            url: img3,
            alt: "National-react"
        },
        {
            url: img4,
            alt: "Teater"
        }
    ]
    

    return (
        <main>
            <NavBar linkArray={linkArray}/>
            <section className={Style.contentwrapper}>
                <HomeContent 
                    ref={homeRef}
                    imageContentURL={'https://picsum.photos/200/300'}
                    imageContentAlt={'fineImageIndeed'}
                    textContent={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero sunt quos, cum obcaecati amet deleniti magnam, assumenda quaerat expedita totam debitis fugit esse quibusdam exercitationem! A commodi beatae mollitia officiis.'}
                    imagePosition={'left'}
                    title={"HOME"}
                    carouselItems={carouselItems}
                />
                    <AboutContent
                    ref={aboutRef}
                    textContent={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero sunt quos, cum obcaecati amet deleniti magnam, assumenda quaerat expedita totam debitis fugit esse quibusdam exercitationem! A commodi beatae mollitia officiis.'}
                    imagePosition={'right'}
                    title={"ABOUT"}
                />
                    <ContactContent
                    ref={contactRef} 
                    imageContentURL={'https://picsum.photos/200/300'}
                    imageContentAlt={'fineImageIndeed'}
                    textContent={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero sunt quos, cum obcaecati amet deleniti magnam, assumenda quaerat expedita totam debitis fugit esse quibusdam exercitationem! A commodi beatae mollitia officiis.'}
                    imagePosition={'left'}
                    title={"CONTACT"}
                />
            </section>
        </main>
    )
}