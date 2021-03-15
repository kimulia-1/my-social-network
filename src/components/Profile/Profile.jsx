import AboutUser from "./AboutUser/AboutUser";
import MyPosts from "./MyPosts/MyPosts";
import style from "./Profile.module.css";

const Profile = (props) => {
  return (
    <div className={style.profile}>
      <AboutUser />
      <MyPosts profilePage={props.profilePage} dispatch={props.dispatch} />
    </div>
  );
};

export default Profile;