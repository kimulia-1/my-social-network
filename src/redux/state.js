import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

let store = {
  
  _state: {
    dialogsPage: {
      dialogsData: [
        { id: 1, name: 'Max', photo: 'https://www.meme-arsenal.com/memes/e4a5d33892cb7aa8b95016599e34f1f3.jpg' },
        { id: 2, name: 'Valery', photo: 'https://image.freepik.com/free-vector/smiling-girl-avatar_102172-32.jpg' },
        { id: 3, name: 'Iasha', photo: 'https://www.meme-arsenal.com/memes/593cd53d7729246e231e41215c32c996.jpg' },
      ],
      messagesData: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Hello' },
        { id: 3, message: 'Hey' },
        { id: 4, message: 'Yo' },
      ],
      newMessageText: 'Hi Hey Yo', // что будет выводитсья изначально в textarea  
    },
    profilePage: {
      postData: [
        { id: 1, message: 'Hello! My name Max', countLikes: 33 },
        { id: 2, message: 'React developer', countLikes: 18 },
        { id: 3, message: 'First react project', countLikes: 2 },
      ],
      newPostText: '',
    }
  },
  _callSubscriber() {
    console.log('State changed')
  },
  
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  
  dispatch(action) {
    this._state.dialogsPage = (dialogsReducer(this._state.dialogsPage, action));
    this._state.profilePage = (profileReducer(this._state.profilePage, action));

      this._callSubscriber(this._state);
    }
}

export default store;