import { useEffect, useState } from "react";
import { getAllBlogs, deleteBlog } from "../../api/BlogApi";
import { getAllQuestions, deleteQuestion } from "../../api/cbtApi";
import Loader from "../../components/Loader";

function ManageContent() {
  const [activeTab, setActiveTab] = useState("news");

  const [blogs, setBlogs] = useState([]);
  const [questions, setQuestions] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const blogsData = await getAllBlogs();
        const questionsData = await getAllQuestions();

        setBlogs(blogsData);
        setQuestions(questionsData.questions);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // DELETE BLOG
  const handleDeleteBlog = async (id) => {
    await deleteBlog(id);
    setBlogs((prev) => prev.filter((b) => b._id !== id));
  };

  // DELETE QUESTION
  const handleDeleteQuestion = async (id) => {
    await deleteQuestion(id);
    setQuestions((prev) => prev.filter((q) => q._id !== id));
  };

  if (loading) return  <Loader text="Loading dashboard..." />;

  return (
    <div className="p-6">

      <h1 className="text-2xl font-bold mb-6">
        Manage Content
      </h1>

      {/* TOGGLE */}
      <div className="flex gap-3 mb-6">
        <button
          onClick={() => setActiveTab("news")}
          className={`px-4 py-2 rounded ${
            activeTab === "news"
              ? "bg-primary text-white"
              : "bg-gray-200"
          }`}
        >
          News Blogs
        </button>

        <button
          onClick={() => setActiveTab("cbt")}
          className={`px-4 py-2 rounded ${
            activeTab === "cbt"
              ? "bg-primary text-white"
              : "bg-gray-200"
          }`}
        >
          CBT Questions
        </button>
      </div>

      {/* ================= NEWS TABLE ================= */}
      {activeTab === "news" && (
        <div className="bg-white shadow rounded overflow-x-auto">
          <table className="w-full">

            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 text-left">Image</th>
                <th className="p-3 text-left">Title</th>
                <th className="p-3 text-left">Content</th>
                <th className="p-3 text-left">Date</th>
                <th className="p-3 text-left">Actions</th>
              </tr>
            </thead>

            <tbody>
              {blogs.map((blog) => (
                <tr key={blog._id} className="border-t">

                  {/* IMAGE */}
                  <td className="p-3">
                    <img
                      src={blog.image}
                      alt="blog"
                      className="w-14 h-14 object-cover rounded"
                    />
                  </td>

                  {/* TITLE */}
                  <td className="p-3 font-medium">
                    {blog.title}
                  </td>

                  {/* CONTENT */}
                  <td className="p-3 text-sm text-gray-600 max-w-xs truncate">
                    {blog.content}
                  </td>

                  {/* DATE */}
                  <td className="p-3 text-sm">
                    {new Date(blog.createdAt).toLocaleDateString()}
                  </td>

                  {/* ACTIONS */}
                  <td className="p-3 flex gap-2">
                    <button className="bg-blue-500 text-white px-3 py-1 rounded">
                      Edit
                    </button>

                    <button
                      onClick={() => handleDeleteBlog(blog._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>

                </tr>
              ))}
            </tbody>

          </table>
        </div>
      )}

      {/* ================= CBT TABLE ================= */}
      {activeTab === "cbt" && (
        <div className="bg-white shadow rounded overflow-x-auto">
          <table className="w-full">

            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 text-left">#</th>
                <th className="p-3 text-left">Question</th>
                <th className="p-3 text-left">Options</th>
                <th className="p-3 text-left">Explanation</th>
                <th className="p-3 text-left">Answer</th>
                <th className="p-3 text-left">Actions</th>
              </tr>
            </thead>

            <tbody>
              {questions.map((q, index) => (
                <tr key={q._id} className="border-t">
                  {/* INDEX */}
                  <td className="p-3 text-center">{index + 1}</td>

                  {/* QUESTION */}
                  <td className="p-3 font-medium">
                    {q.question}
                  </td>

                  {/* OPTIONS */}
                  <td className="p-3">
                    A. {q.options.A}
                    <br />
                    B. {q.options.B}
                    <br />
                    C. {q.options.C}
                    <br />
                    D. {q.options.D}
                  </td>

                  {/* EXPLANATION */}
                  <td className="p-3 text-sm text-gray-600">
                    {q.explanation}
                  </td>

                  {/* ANSWER */}
                  <td className="p-3 text-sm text-gray-600">
                    {q.correctAnswer}
                  </td>

                  {/* ACTIONS */}
                  <td className="p-3 flex gap-2">
                    <button className="bg-blue-500 text-white px-3 py-1 rounded">
                      Edit
                    </button>

                    <button
                      onClick={() => handleDeleteQuestion(q._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>

                </tr>
              ))}
            </tbody>

          </table>
        </div>
      )}

    </div>
  );
}

export default ManageContent;