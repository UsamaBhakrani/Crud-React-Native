import { CREATE_BLOG_POST, DELETE_BLOG_POST, EDIT_BLOG_POST } from "../actions";

export default blogReducer = (state, action) => {
  if (action.type === CREATE_BLOG_POST) {
    return [
      ...state,
      { id: state.length + 1, title: `Blog Post # ${state.length + 1}` },
    ];
  }
  if (action.type === DELETE_BLOG_POST) {
    const newState = state.filter((item) => item.id !== action.payload);
    return [...newState];
  }
  return state;
};
