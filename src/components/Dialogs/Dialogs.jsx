import Message from "./Message/Message";
import Dialog from "./Dialog/Dialog";
import style from "./Dialogs.module.css";
import React from 'react';
import {updateMessageTextActionCreator, addMessageActionCreator} from '../../redux/dialogs-reducer'

const Dialogs = (props) => {
  
  let dialogsElements = props.dialogsPage.dialogsData
    .map(dialog => <Dialog name={dialog.name} id={dialog.id} photo={dialog.photo} />) // список диалогов
  let messagesElements = props.dialogsPage.messagesData
    .map(message => <Message message={message.message} /> ) // отрисовываем все сообщения
  
  let newMessageElement = React.createRef();
  let addMessage = () => {
    props.dispatch(addMessageActionCreator());
  };
  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.dispatch(updateMessageTextActionCreator(text));
  }

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsList}>
        {dialogsElements}
      </div>
      <div className={style.messages}>
        <div>{messagesElements}</div>
        <div className={style.inputMessage}>
          <textarea onChange={onMessageChange} value={props.dialogsPage.newMessageText} ref={newMessageElement} cols="30" rows="2"></textarea>
          <div><button onClick={addMessage}>Send Message</button></div>
        </div>
      </div>
    </div>
  )
}


export default Dialogs;