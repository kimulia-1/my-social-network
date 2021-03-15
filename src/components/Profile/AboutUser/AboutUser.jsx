import style from "./AboutUser.module.css";

const AboutUser = () => {
  return (
    <div className={style.aboutUser}>
      <div className={style.userTitle}><img src="https://images.wallpaperscraft.ru/image/shestiugolniki_soty_svechenie_179799_1920x1080.jpg" alt="main-picture" /></div>
      <div className={style.profile}>
        <div className={style.avatar}><img src="https://porody-sobak.ru/wp-content/uploads/2017/10/gladkosherstnyj-chihuahua.jpg" alt="ava"/></div>
        <div className={style.discription}>
          Hello! My name is Max.
        </div>
      </div>
    </div>
  );
};

export default AboutUser;