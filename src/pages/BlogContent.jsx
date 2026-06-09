import { useParams } from "react-router-dom";
import { useBlog } from "../hooks/UseBlog";
import Loader from "../components/Loader";

function BlogDetails() {
  const { id } = useParams();

  const {
    data: blog,
    isLoading,
    error,
  } = useBlog(id);

  if (isLoading) {
    return <Loader text="Loading blog..." />;
  }

  if (error) {
    return (
      <div className="text-center py-10">
        Blog not found
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      {blog?.image?.url && (
        <img
          src={blog.image.url}
          alt={blog.title}
          className="w-full h-96 object-cover rounded-xl mb-8"
        />
      )}

      <h1 className="text-4xl font-bold text-secondary mb-4">
        {blog.title}
      </h1>

      <p className="text-gray-500 mb-8">
        {new Date(blog.createdAt).toLocaleDateString()}
      </p>

      <div className="prose max-w-none">
        {blog.content}
      </div>
    </div>
  );
}

export default BlogDetails;