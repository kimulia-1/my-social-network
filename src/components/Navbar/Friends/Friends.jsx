import style from "./Friends.module.css";

const Friends = (props) => {  
  return (
    <div>
      <div className={style.friend}>
        <div className={style.photo}>
          <img src={props.photo} alt="photo"/>
        </div>
        <div className={style.name}>{props.name}</div>
      </div>
    </div>
  )
}



export default Friends;