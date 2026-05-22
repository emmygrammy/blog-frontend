import { useEffect, useState } from "react";
import TopSection from "../components/TopSection";
import { getAllBlogs } from "../api/BlogApi";

function Blogs() {
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

  if (loading) {
    return (
      <div className="text-center text-2xl font-bold text-primary py-10">
        Loading...
      </div>
    );
  }

  return (
    <>
      <TopSection
        className="text-center md:text-left"
        title="Blogs"
        subtitle="Read our latest blogs and articles on study tips, exam preparation, and more"
      />

      <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-6">
        {blogs.length > 0 ? (
          blogs.map((blog) => (
            <div
              key={blog._id}
              className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition"
            >
              <h2 className="font-bold text-xl text-gray-800">
                {blog.title}
              </h2>

              <p className="text-gray-600 mt-2">
                {blog.content?.slice(0, 120)}...
              </p>
            </div>
          ))
        ) : (
          <p className="text-center col-span-3 text-gray-500">
            No blogs found
          </p>
        )}
      </div>
    </>
  );
}

export default Blogs;