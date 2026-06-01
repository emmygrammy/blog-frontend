import { useEffect, useState } from "react";
import { getAllBlogs, deleteBlog } from "../../api/BlogApi";
import { getAllQuestions, deleteQuestion } from "../../api/cbtApi";
import DeleteModal from "../../components/DeleteModal";
import Loader from "../../components/Loader";

function ManageContent() {
  const [activeTab, setActiveTab] = useState("news");

  const [blogs, setBlogs] = useState([]);
  const [questions, setQuestions] = useState([]);

  const [loading, setLoading] = useState(true);

  // MODAL STATE
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [deleteType, setDeleteType] = useState(null); // "blog" | "question"

  useEffect(() => {
    const fetchData = async () => {
      try {
        const blogsData = await getAllBlogs();
        const questionsData = await getAllQuestions();

        setBlogs(blogsData);
        setQuestions(questionsData.questions || []);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // ================= DELETE LOGIC (NO UI HERE) =================
  const deleteBlogById = async (id) => {
    await deleteBlog(id);
    setBlogs((prev) => prev.filter((b) => b._id !== id));
  };

  const deleteQuestionById = async (id) => {
    await deleteQuestion(id);
    setQuestions((prev) => prev.filter((q) => q._id !== id));
  };

  // ================= CONFIRM DELETE =================
  const handleConfirmDelete = async () => {
    if (!selectedId) return;

    try {
      if (deleteType === "blog") {
        await deleteBlogById(selectedId);
      }

      if (deleteType === "question") {
        await deleteQuestionById(selectedId);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setShowDeleteModal(false);
      setSelectedId(null);
      setDeleteType(null);
    }
  };

  if (loading) return <Loader text="Loading dashboard..." />;

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
            activeTab === "news" ? "bg-primary text-white" : "bg-gray-200"
          }`}
        >
          News Blogs
        </button>

        <button
          onClick={() => setActiveTab("cbt")}
          className={`px-4 py-2 rounded ${
            activeTab === "cbt" ? "bg-primary text-white" : "bg-gray-200"
          }`}
        >
          CBT Questions
        </button>
      </div>

      {/* ================= BLOGS ================= */}
      {activeTab === "news" && (
        <div className="bg-white shadow rounded overflow-x-auto">
          <table className="w-full">

            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 text-left font-heading">No</th>
                <th className="p-3 text-left font-heading">Image</th>
                <th className="p-3 text-left font-heading">Title</th>
                <th className="p-3 text-left font-heading">Content</th>
                <th className="p-3 text-left font-heading">Date</th>
                <th className="p-3 text-left font-heading">Actions</th>
              </tr>
            </thead>

            <tbody>
              {blogs.map((blog, index) => (
                <tr key={blog._id} className="border-t">
                  <td className="p-3 font-heading">{index + 1}</td>

                  <td className="p-3 font-heading">
                    <img
                      src={blog.image}
                      alt="blog"
                      className="w-14 h-14 object-cover rounded"
                    />
                  </td>

                  <td className="p-3 font-medium font-heading">
                    {blog.title}
                    </td>

                  <td className="p-3 text-sm text-gray-600 max-w-xs truncate font-heading">
                    {blog.content}
                  </td>

                  <td className="p-3 text-sm font-heading">
                    {new Date(blog.createdAt).toLocaleDateString()}
                  </td>

                  <td className="p-3 font-heading">
                    <div className="flex gap-2">

                      <button className="bg-blue-500 text-white px-3 py-1 rounded font-heading">
                        Edit
                      </button>

                      <button
                        onClick={() => {
                          setSelectedId(blog._id);
                          setDeleteType("blog");
                          setShowDeleteModal(true);
                        }}
                        className="bg-red-500 text-white px-3 py-1 rounded font-heading"
                      >
                        Delete
                      </button>

                    </div>
                  </td>

                </tr>
              ))}
            </tbody>

          </table>
        </div>
      )}

      {/* ================= CBT ================= */}
      {activeTab === "cbt" && (
        <div className="bg-white shadow rounded overflow-x-auto">
          <table className="w-full">

            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 text-left font-heading w-12">No</th>
                <th className="p-3 text-left font-heading w-48">Question</th>
                <th className="p-3 text-left font-heading w-48">Options</th>
                <th className="p-3 text-left font-heading w-48">Explanation</th>
                <th className="p-3 text-left font-heading w-12">Answer</th>
                <th className="p-3 text-left font-heading w-20">Actions</th>
              </tr>
            </thead>

            <tbody>
              {questions.map((q, index) => (
                <tr key={q._id} className="border-t">

                  <td className="p-3 font-heading">{index + 1}</td>

                  <td className="p-3 font-medium font-heading">{q.question}</td>

                  <td className="p-3 font-heading">
                    A. {q.options.A}
                    <br />
                    B. {q.options.B}
                    <br />
                    C. {q.options.C}
                    <br />
                    D. {q.options.D}
                  </td>

                  <td className="p-3 text-sm font-heading">{q.explanation}</td>

                  <td className="p-3 text-sm font-heading">{q.correctAnswer}</td>

                  <td className="p-3 font-heading">
                    <div className="flex gap-2">

                      <button className="bg-blue-500 text-white px-3 py-1 rounded font-heading">
                        Edit
                      </button>

                      <button
                        onClick={() => {
                          setSelectedId(q._id);
                          setDeleteType("question");
                          setShowDeleteModal(true);
                        }}
                        className="bg-red-500 text-white px-3 py-1 rounded"
                      >
                        Delete
                      </button>

                    </div>
                  </td>

                </tr>
              ))}
            </tbody>

          </table>
        </div>
      )}

      {/* ================= DELETE MODAL ================= */}
      <DeleteModal
        isOpen={showDeleteModal}
        title={`Delete ${deleteType === "blog" ? "Blog" : "Question"}`}
        message={`Are you sure you want to delete this ${deleteType}?`}
        onClose={() => {
          setShowDeleteModal(false);
          setSelectedId(null);
          setDeleteType(null);
        }}
        onConfirm={handleConfirmDelete}
      />

    </div>
  );
}

export default ManageContent;