import { createContext, useContext, useReducer } from "react";
import { CREATE_BLOG_POST, DELETE_BLOG_POST, EDIT_BLOG_POST } from "../actions";
import blogReducer from "../reducers/blogReducer";

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [blogPosts, dispatch] = useReducer(blogReducer, []);

  const createBlogPost = () => {
    dispatch({ type: CREATE_BLOG_POST });
  };

  return (
    <BlogContext.Provider value={{ data: blogPosts, createBlogPost }}>
      {children}
    </BlogContext.Provider>
  );
};

export default useBlogs = () => {
  return useContext(BlogContext);
};
