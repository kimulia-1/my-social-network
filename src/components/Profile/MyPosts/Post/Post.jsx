import style from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={style.post}>
      <div className={style.photo}>
        <img src="https://porody-sobak.ru/wp-content/uploads/2017/10/gladkosherstnyj-chihuahua.jpg" alt="avatar" />
      </div>
      <div className={style.text}>
        {props.message}
      </div>
      <div className={style.like}>
        <span>like:</span> {props.countLikes}
      </div>
    </div>
  );
};

export default Post;