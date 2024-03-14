import { createContext, useContext } from "react";

const BlogContext = createContext();



export const BlogProvider = ({ children }) => {
  return <BlogContext.Provider value={{}}>{children}</BlogContext.Provider>;
};

// export default useBlogs = () => {
//   return useContext(BlogContext);
// };
