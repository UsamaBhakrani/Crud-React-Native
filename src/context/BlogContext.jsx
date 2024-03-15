import { CREATE_BLOG_POST, DELETE_BLOG_POST, EDIT_BLOG_POST } from "../actions";
import blogReducer from "../reducers/blogReducer";
import createDataContext from "./createDataContext";

const createBlogPost = (dispatch) => {
  return () => {
    dispatch({ type: CREATE_BLOG_POST });
  };
};

const deleteBlogPost = (dispatch) => {
  return () => {
    dispatch({ type: DELETE_BLOG_POST,payload:1 });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { createBlogPost, deleteBlogPost },
  []
);
