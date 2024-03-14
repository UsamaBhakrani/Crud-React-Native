import { createContext, useContext } from "react";

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const blogPosts = [{ title: "Blog Post #1" }, { title: "Blog Post #2" }];
  return (
    <BlogContext.Provider value={{ blogPosts }}>
      {children}
    </BlogContext.Provider>
  );
};

export default useBlogs = () => {
  return useContext(BlogContext);
};
