import { Context } from "../context/BlogContext";
import { useContext } from "react";
import BlogPostForm from "../components/BlogPostForm";

const CreateScreen = ({ navigation: { navigate } }) => {
  const { createBlogPost,createBlogPostOnServer } = useContext(Context);
  return (
    <BlogPostForm
      onSubmit={(title, content) => {
        createBlogPostOnServer(title, content, () => navigate("Home"));
      }}
    />
  );
};

export default CreateScreen;
