import useMediaQuery from "../hooks/useMediaQuery";
import Style from "./NavBar.module.scss";

export const NavBar = (props) => {

  const scrollTo = (ref) => {
      ref.current.scrollIntoView({ behavior: 'smooth'})
  }

  const isDesktop = useMediaQuery("(min-width: 960px)")

  return (
    <nav className={isDesktop ? Style.desktop : Style.mobile}>
      <div />
      <div className={Style.linkcontainer}>
        {
            props.linkArray.map((item,index) => {
                return (
                    <button key={index.toString()} onClick={() => scrollTo(item.ref)}>{item.title}</button>
                )
            })
        }
      </div>
    </nav>
  );
};
