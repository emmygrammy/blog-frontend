
import { useEffect, useState } from "react";
import { getAllBlogs } from "../../api/BlogApi";
import { getAllQuestions } from "../../api/cbtApi";

function DashboardHome() {
  const [blogs, setBlogs] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const blogsData = await getAllBlogs();
        const questionsData = await getAllQuestions();

        setBlogs(blogsData);
        setQuestions(questionsData);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  if (loading) {
    return (
      <div className="p-6">
        <h2>Loading dashboard...</h2>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-primary mb-8">
        Dashboard 🚀
      </h1>

      {/* STATS */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">

        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-gray-500 text-sm">
            Total Blogs
          </h3>

          <p className="text-4xl font-bold text-primary mt-2">
            {blogs.length}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-gray-500 text-sm">
            Total CBT Questions
          </h3>

          <p className="text-4xl font-bold text-primary mt-2">
            {questions.length}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-gray-500 text-sm">
            Recent Posts
          </h3>

          <p className="text-4xl font-bold text-primary mt-2">
            {blogs.slice(0, 5).length}
          </p>
        </div>

      </div>

      {/* RECENT BLOGS */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-bold mb-4">
          Recent Posts
        </h2>

        {blogs.length === 0 ? (
          <p>No blog posts available.</p>
        ) : (
          <div className="space-y-4">
            {blogs.slice(0, 5).map((blog) => (
              <div
                key={blog._id}
                className="border-b pb-3"
              >
                <h3 className="font-semibold">
                  {blog.title}
                </h3>

                <p className="text-sm text-gray-500">
                  {new Date(
                    blog.createdAt
                  ).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default DashboardHome;