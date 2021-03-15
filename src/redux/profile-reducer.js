const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        countLikes: 0,
      };
      state.postData.push(newPost);
      state.newPostText = '';
      return state;
    case UPDATE_POST_TEXT:
      state.newPostText = action.textArea;
      return state;
    default:
      return state;
  }
}

export const addPostCreator = () => ({ type: ADD_POST })
export const updateMessagePostCreator = (post) => ({ type: UPDATE_POST_TEXT, textArea: post })

export default profileReducer;
