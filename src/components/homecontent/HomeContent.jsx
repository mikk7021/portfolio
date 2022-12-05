import Style from "./HomeContent.module.scss"
import { forwardRef } from "react"
import { Slider } from "../slider/Slider"
import img5 from '../../assets/images/infoboard.webp'
import useMediaQuery from "../hooks/useMediaQuery"


export const HomeContent = forwardRef((props, ref) => {

    const isDesktop = useMediaQuery("(min-width: 960px)");

    const title = props.title || "Missing title"

    return (
        <section ref={ref} className={isDesktop ? Style.desktop : Style.mobile}>
            <h2>{title}</h2>
            <article>
            <Slider carouselItems={props.carouselItems} time={6000} shouldChange={true} />
            <div className={Style.textcontainer}>
                <p>Mit mål er at udvikle mine kompetencer som frontend developer og levere flotte og unikke designs samt levere den bedst mulige oplevelse for brugeren.</p>
                <p>Jeg har ca. 2 års erfaring med at kode og har erfaring med React, css, CMS systemer, node servers og andre teknologier. Derudover har jeg sammen med andre kodet forskellige hjemmesider og apps.</p>
            </div>
            </article>
            <article className={Style.infoboardcontainer}>
                <div className={Style.textcontainer}>
                    <p>Jeg har været med til at udvikle Techcollege's infoboard som viser ugens menu, bustider og lektioner.</p>
                    <p>Du kan finde mine projekter på min GitHub: <a target="__blank" href="https://github.com/mikk7021">https://github.com/mikk7021</a></p>
                </div>
                <div>
                    <img src={img5} alt="Infoboard" />
                </div>
            </article>
        </section>
    )
})