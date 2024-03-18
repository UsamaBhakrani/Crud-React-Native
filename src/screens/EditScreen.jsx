import { useContext } from "react";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const EditScreen = ({ route: { params }, navigation: { pop } }) => {
  const { state, editBlogPost, editBlogPostOnServer } = useContext(Context);
  const blogPost = state.find((blogPost) => blogPost.id === params.id);
  const id = blogPost.id;

  return (
    <BlogPostForm
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(title, content) =>
        editBlogPostOnServer(id, title, content, () => pop())
      }
    />
  );
};

export default EditScreen;
