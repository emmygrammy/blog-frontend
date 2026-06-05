// import { useEffect, useState } from "react";
// import { getAllBlogs } from "../../api/BlogApi";
// import { getAllQuestions } from "../../api/cbtApi";
import Loader from "../../components/Loader";
import { useBlogs } from "../../hooks/UseBlog";
import { useQuestions } from "../../hooks/UseQuestions";


function DashboardHome() {
  // const [blogs, setBlogs] = useState([]);
  // const [questions, setQuestions] = useState([]);
  // const [cbtCount, setCbtCount] = useState(0);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchDashboardData = async () => {
  //     try {
  //       const blogsData = await getAllBlogs();
  //       const questionsResponse = await getAllQuestions();

  //       setBlogs(blogsData);

  //       // ✅ FIX HERE
  //       setQuestions(questionsResponse.questions);
  //       setCbtCount(questionsResponse.total);

  //     } catch (error) {
  //       console.log(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchDashboardData();
  // }, []);

  const { 
    data: blogs = [], 
    isLoading: blogsLoading,
    error: blogsError,
  } = useBlogs();
  
  const { 
    data: questions = [], 
    isLoading: questionsLoading,
    error: questionsError,
  } = useQuestions();

  if (blogsLoading || questionsLoading) {
    return (
        <Loader text="Loading dashboard..." />
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold text-primary mb-8 font-heading">
        Dashboard analytics
      </h1>

      {/* STATS */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">

        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-gray-500 text-sm font-heading">
            Total post
          </h3>
          <p className="text-4xl font-bold text-primary mt-2">
            {blogs.length + cbtCount}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-gray-500 text-sm font-heading">
            CBT Questions
          </h3>
          <p className="text-4xl font-bold text-primary mt-2">
            {cbtCount}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-gray-500 text-sm font-heading">
           News blog
          </h3>
          <p className="text-4xl font-bold text-primary mt-2">
            {blogs.length}
          </p>
        </div>

      </div>

      {/* RECENT BLOGS */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-bold mb-4 font-heading">
          Recent Posts
        </h2>

        {blogs.length === 0 ? (
          <p>No blog posts available.</p>
        ) : (
          <div className="space-y-4">
            {blogs.slice(0, 5).map((blog) => (
              <div key={blog._id} className="border-b pb-3">
                <h3 className="font-semibold font-heading">
                  {blog.title}
                </h3>

                <p className="text-sm text-gray-500 font-heading">
                  {new Date(blog.createdAt).toLocaleDateString()}
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