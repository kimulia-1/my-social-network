import { NavLink } from "react-router-dom";
import style from "./../Dialogs.module.css";

const Dialog = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={style.dialog}>
      <img src={props.photo} alt="avatar"/>
      <NavLink to={path} activeClassName={style.activeLink}>{props.name}</NavLink>
    </div>
  )
}

export default Dialog;