import { CREATE_BLOG_POST, DELETE_BLOG_POST, EDIT_BLOG_POST } from "../actions";

export default blogReducer = (state, action) => {
  if (action.type === CREATE_BLOG_POST) {
    return [
      ...state,
      {
        id: Math.floor(Math.random() * 99999),
        title: action.payload.title,
        content: action.payload.content,
      },
    ];
  }
  if (action.type === DELETE_BLOG_POST) {
    return state.filter((item) => item.id !== action.payload);
  }
  return state;
};
