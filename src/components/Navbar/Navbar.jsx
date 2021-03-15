import style from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import Friends from "./Friends/Friends";

const Navbar = (props) => {
  
  let friendsElements = props.state.dialogsData
    .map(friend => <Friends name={friend.name} photo={friend.photo} />)


  return (
    <nav className ={style.navbar}>
      <div className={style.item}><NavLink to="/profile" activeClassName= {style.activeLink}>Profile</NavLink></div>
      <div className = {style.item}><NavLink to = "/dialogs" activeClassName ={style.activeLink}>Message</NavLink></div>
      <div className = {style.item}><NavLink to = "/news" activeClassName = {style.activeLink}>News</NavLink></div>
      <div className = {style.item}><NavLink to = "/music" activeClassName = {style.activeLink}>Music</NavLink></div>
      <div className={style.item}><NavLink to="/setting" activeClassName={style.activeLink}>Setting</NavLink></div>
      <div className={style.friends}>
        <h3>My friends</h3>
        <div className={style.friendsItems}>{friendsElements}</div>
      </div>
    </nav>
  );
};

export default Navbar;