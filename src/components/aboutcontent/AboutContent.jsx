import { forwardRef, useState } from "react"
import Style from './AboutContent.module.scss'
import img1 from '../../assets/images/gc1.webp'
import img2 from '../../assets/images/gc3.webp'
import { Modal } from "../modal/Modal"
import useMediaQuery from "../hooks/useMediaQuery"



export const AboutContent = forwardRef((props, ref) => {

    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState();

    const isDesktop = useMediaQuery("(min-width: 960px)");

    const title = props.title || "Missing title"

    function handleModal(value) {
        if (showModal === false) {
          setShowModal(true);
          setModalContent(value);
        } else {
          setShowModal(false);
        }
      }

    return (
        <section ref={ref} className={isDesktop ? Style.desktop : Style.mobile}>
            <h2>{title}</h2>
            <article>
                <div className={Style.textwrapper}>
                        <p>Jeg er en ung mand på 28 år der bor i Aalborg. Jeg får tit at vide at jeg er en flink, høflig person der ikke er bange for at spørge fra sig og tilejne sig ny viden. Jeg ser mig selv som en glad pligtopfyldene, selvstændig person.</p>
                        <p>Jeg har altid haft stor interresse inden for IT og valgte i 2020 at uddanne mig til frontend webudvikler, siden da har jeg lært at kode html, css og javascript. Jeg har det seneste år arbejdet med React og jeg har en smule erfaring med CMS systemer, MySQL og php.</p>
                        <p>Under min uddannelse deltog jeg også i et ERASMUS projekt hvor jeg sammen med nogle elever fra en skole på Gran Canaria, skulle kode en "guide" app på 3 uger.</p>
                </div>
                <div className={Style.imagecontainer}>
                    <img className={Style.articleimage} onClick={() => {handleModal(1)}} src={img1} alt="Gran_canaria" />
                    <img className={Style.articleimage} onClick={() => {handleModal(2)}} src={img2} alt="Gran_canaria_nature" />
                </div>
                    {showModal ? <Modal setShowModal={setShowModal} modalContent={modalContent} /> : null}
            </article>
        </section>
    )
})