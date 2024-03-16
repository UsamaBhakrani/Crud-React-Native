import { Context } from "../context/BlogContext";
import { useContext } from "react";
import BlogPostForm from "../components/BlogPostForm";

const CreateScreen = ({ navigation: { navigate } }) => {
  const { createBlogPost } = useContext(Context);
  return (
    <BlogPostForm
      onSubmit={(title, content) => {
        createBlogPost(title, content, () => navigate("Home"));
      }}
    />
  );
};

export default CreateScreen;
