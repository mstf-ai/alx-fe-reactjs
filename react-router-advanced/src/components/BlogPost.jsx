// src/components/BlogPost.jsx
import { useParams } from "react-router-dom";

function BlogPost() {
  const { id } = useParams();
  return <div>Showing blog post with ID: {id}</div>;
}

export default BlogPost;
