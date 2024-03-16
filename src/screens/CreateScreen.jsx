import { Context } from "../context/BlogContext";
import { useContext } from "react";
import BlogPostForm from "../components/BlogPostForm";

const CreateScreen = ({ navigation: { navigate } }) => {
  const { createBlogPost } = useContext(Context);
  return <BlogPostForm />;
};

export default CreateScreen;
