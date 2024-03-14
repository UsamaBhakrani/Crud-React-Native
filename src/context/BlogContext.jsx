import { createContext, useContext } from "react";

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const number = 15;
  return (
    <BlogContext.Provider value={{ number }}>{children}</BlogContext.Provider>
  );
};

export default useBlogs = () => {
  return useContext(BlogContext);
};
