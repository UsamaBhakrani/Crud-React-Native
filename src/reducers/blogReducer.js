import {
  CREATE_BLOG_POST,
  DELETE_BLOG_POST,
  EDIT_BLOG_POST,
  GET_BLOG_POST,
  CREATE_BLOG_POST_ON_SERVER,
  DELETE_BLOG_POST_ON_SERVER,
} from "../actions";

export default blogReducer = (state, action) => {
  if (action.type === GET_BLOG_POST) {
    return action.payload;
  }
  if (action.type === CREATE_BLOG_POST_ON_SERVER) {
    return [
      ...state,
      {
        title: action.payload.title,
        content: action.payload.content,
      },
    ];
  }
  if (action.type === DELETE_BLOG_POST_ON_SERVER) {
    return state.filter((item) => item.id !== action.payload);
  }
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
  if (action.type === EDIT_BLOG_POST) {
    return state.map((blogPost) => {
      return blogPost.id === action.payload.id ? action.payload : blogPost;
    });
  }
  return state;
};
