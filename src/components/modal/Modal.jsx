import Style from "./modal.module.scss";
import gc1 from '../../assets/images/gc1.webp';
import gc2 from '../../assets/images/gc3.webp';
import { ReactComponent as Closeicon } from "../assets/images/close.svg";

export const Modal = (props) => {

  return (
    <div className={Style.modal}>
      <section >
          <Closeicon onClick={() => props.setShowModal(false)} />
        {props.modalContent === 1 ? (
          <img
            className={Style.modalimage}
            style={{cursor: 'default'}}
            src={gc1} 
            alt="Gran Canaria" />
        ) :
          props.modalContent === 2 ? (
          <img
            className={Style.modalimage}
            style={{cursor: 'default'}}
            src={gc2} 
            alt="Gran Canaria" />
        ) : null}
      </section>
    </div>
  );
};
