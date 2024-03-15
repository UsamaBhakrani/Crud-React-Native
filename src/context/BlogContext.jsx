import { CREATE_BLOG_POST, DELETE_BLOG_POST, EDIT_BLOG_POST } from "../actions";
import blogReducer from "../reducers/blogReducer";
import createDataContext from "./createDataContext";

const createBlogPost = (dispatch) => {
  return async (title, content, callback) => {
    await dispatch({ type: CREATE_BLOG_POST, payload: { title, content } });
    callback();
  };
};

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: DELETE_BLOG_POST, payload: id });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { createBlogPost, deleteBlogPost },
  []
);
