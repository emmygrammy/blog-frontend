import TopSection from "../components/TopSection";
import { getAllBlogs } from "../api/Blog";
import { useState, useEffect } from "react";

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

 useEffect(() => {
  const fetchBlogs = async () => {
    console.log("FETCH STARTED");

    try {
      const data = await getAllBlogs();
      console.log("API DATA:", data);

      const blogsArray =
        Array.isArray(data)
          ? data
          : data?.blogs || data?.data || [];

      setBlogs(blogsArray);
    } catch (error) {
      console.log("ERROR:", error);
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
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="bg-white shadow-md rounded-xl p-4"
          >
            <h2 className="font-bold text-xl">{blog.title}</h2>

            <p className="text-gray-600 mt-2">
              {blog.content?.slice(0, 100)}...
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Blogs;