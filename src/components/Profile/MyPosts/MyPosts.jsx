import React from 'react';
import style from "./MyPosts.module.css";
import Post from "./Post/Post";
import {addPostCreator, updateMessagePostCreator} from '../../../redux/profile-reducer'


const MyPosts = (props) => {

  let postsElements = props.profilePage.postData
    .map(post => <Post message={post.message} countLikes={post.countLikes} />) // собираем посты
  
  let newPostText = props.profilePage.newPostText;
  let addPost = () => {
    props.dispatch(addPostCreator());
  };
  let onPostChange = (event) => {
    let post = event.target.value;
    props.dispatch(updateMessagePostCreator(post));
  };
  
  return (
    <div className={style.profile}>
      <h3>My posts</h3>
        <div><textarea onChange={onPostChange} value={newPostText} cols="30" rows="2"></textarea></div>
        <div><button onClick={addPost}>Send add</button></div>
      <div className={style.posts}>{ postsElements }</div>
    </div>
  );
};

export default MyPosts;