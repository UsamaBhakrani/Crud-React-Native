import {
  CREATE_BLOG_POST,
  CREATE_BLOG_POST_ON_SERVER,
  DELETE_BLOG_POST,
  EDIT_BLOG_POST,
  GET_BLOG_POST,
} from "../actions";
import jsonserver from "../api/jsonserver";
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

const editBlogPost = (dispatch) => {
  return async (id, title, content, callback) => {
    await dispatch({ type: EDIT_BLOG_POST, payload: { id, title, content } });
    callback();
  };
};

// JSON Server

const getBlogPosts = (dispatch) => {
  return async () => {
    const response = await jsonserver.get("/blogposts");
    dispatch({ type: GET_BLOG_POST, payload: response.data });
  };
};

const createBlogPostOnServer = (dispatch) => {
  return async (title, content, callback) => {
    await jsonserver.post("/blogposts", { title, content });
    // dispatch({ type: CREATE_BLOG_POST_ON_SERVER, payload: { title, content } });
    callback();
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  {
    createBlogPost,
    deleteBlogPost,
    editBlogPost,
    getBlogPosts,
    createBlogPostOnServer,
  },
  []
);
