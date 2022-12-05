import { forwardRef } from "react"
import Style from './ContactContent.module.scss'
import { ReactComponent as Linkedin } from '../assets/images/linkedin.svg'
import { ReactComponent as Gmail } from '../assets/images/gmail.svg'
import { ReactComponent as Github } from '../assets/images/github.svg'
import img from '../../assets/images/mig.webp'
import useMediaQuery from "../hooks/useMediaQuery"

export const ContactContent = forwardRef((props, ref) => {

    const title = props.title || "Missing title"

    const isDesktop = useMediaQuery('(min-width: 960px)')

    return (
        <section ref={ref} className={isDesktop ? Style.desktop : Style.mobile}>
            <h2>{title}</h2>
            <article>
                <div className={Style.headercontainer}>
                    <img src={img} alt="Mikkel" />
                </div>
                <h3>Tak for besøget!</h3>
                <div className={Style.linkswrapper}>
                        <a target="__blank" href="https://www.linkedin.com/in/mikkel-frydensberg/">
                            <Linkedin />         
                        </a>
                        <a target="__blank" href="https://github.com/mikk7021">
                            <Github />
                        </a>
                        <a href="mailto: mikk7021@gmail.com" target="__blank">
                            <Gmail />
                        </a> 
                </div>
            </article>
        </section>
    )
})