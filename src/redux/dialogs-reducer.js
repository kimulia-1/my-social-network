const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT'; // создали константу для action  
const ADD_MESSAGE = 'ADD-MESSAGE';

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 5,
        message: state.newMessageText,
      }
      state.messagesData.push(newMessage); // добавили новый объект
      state.newMessageText = '';
      return state;
    case UPDATE_MESSAGE_TEXT:
      state.newMessageText = action.newText;
      return state;
    default:
      return state;
  }
}

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })
export const updateMessageTextActionCreator = (text) => ({ type: UPDATE_MESSAGE_TEXT, newText: text })

export default dialogsReducer;
