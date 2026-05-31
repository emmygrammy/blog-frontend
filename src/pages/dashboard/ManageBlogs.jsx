import { useEffect, useState } from "react";
import { getAllBlogs, deleteBlog } from "../../api/BlogApi";

function ManageBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await getAllBlogs();
        setBlogs(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this blog?"
    );

    if (!confirmDelete) return;

    try {
      await deleteBlog(id);

      setBlogs((prev) =>
        prev.filter((blog) => blog._id !== id)
      );

      alert("Blog deleted successfully");
    } catch (error) {
      console.log(error);
      alert("Failed to delete blog");
    }
  };

  if (loading) {
    return (
      <div className="p-6">
        <h2 className="text-lg font-semibold">
          Loading blogs...
        </h2>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-primary mb-6">
        Manage Blogs
      </h1>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left p-4">Image</th>
              <th className="text-left p-4">Title</th>
              <th className="text-left p-4">Content</th>
              <th className="text-left p-4">Created</th>
              <th className="text-left p-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {blogs.length === 0 ? (
              <tr>
                <td
                  colSpan="5"
                  className="text-center p-6"
                >
                  No blogs found
                </td>
              </tr>
            ) : (
              blogs.map((blog) => (
                <tr
                  key={blog._id}
                  className="border-t"
                >
                  <td className="p-4">
                    {blog.image ? (
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-16 h-16 object-cover rounded"
                      />
                    ) : (
                      <div className="w-16 h-16 bg-gray-200 rounded flex items-center justify-center text-xs">
                        No Image
                      </div>
                    )}
                  </td>

                  <td className="p-4 font-medium">
                    {blog.title}
                  </td>

                  <td className="p-4 max-w-sm truncate">
                    {blog.content}
                  </td>

                  <td className="p-4">
                    {new Date(
                      blog.createdAt
                    ).toLocaleDateString()}
                  </td>

                  <td className="p-4">
                    <div className="flex gap-2">
                      <button
                        className="bg-blue-600 text-white px-3 py-1 rounded"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() =>
                          handleDelete(blog._id)
                        }
                        className="bg-red-600 text-white px-3 py-1 rounded"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ManageBlogs;