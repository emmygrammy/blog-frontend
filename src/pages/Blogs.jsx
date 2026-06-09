import TopSection from "../components/TopSection";
import { useQuestions } from "../hooks/UseQuestions";
import Loader from "../components/Loader";
import { useBlogs } from "../hooks/UseBlog";

function Blogs() {
  const { data: questionsData } = useQuestions();
  const questions = questionsData?.questions || [];

  const {
    data: blogs = [],
    isLoading: blogsLoading,
    error: blogsError,
  } = useBlogs();

  if (blogsLoading) {
    return <Loader text="Loading content..." />;
  }

  if (blogsError) {
    return (
      <div className="text-center py-10 text-red-500">
        Failed to load blogs
      </div>
    );
  }

  return (
    <>
      <TopSection
        className="text-center md:text-left"
        title="Learning Hub"
        subtitle="Read latest news updates and practice CBT questions in one place"
      />

      <div className="max-w-7xl mx-auto px-4 py-10 space-y-16">

        {/* NEWS SECTION */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-secondary">
              📰 Latest News
            </h2>
          </div>

          {blogs.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-6">
              {blogs.map((blog) => (
                <div
                  key={blog._id}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
                >
                  <div className="h-48 bg-gray-200">
                    {blog.image?.url ? (
                      <img
                        src={blog.image.url}
                        alt={blog.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full text-gray-500">
                        No Image
                      </div>
                    )}
                  </div>

                  <div className="p-4">
                    <h3 className="font-bold text-lg text-secondary">
                      {blog.title}
                    </h3>

                    <p className="text-gray-600 mt-2 text-sm">
                      {blog.content?.slice(0, 100)}...
                    </p>

                    <button className="mt-4 text-primary font-medium text-sm">
                      Read more →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No blogs available</p>
          )}
        </section>

        {/* CBT SECTION */}
        <section>
          <h2 className="text-2xl font-bold text-secondary mb-6">
            🧠 CBT Practice Questions
          </h2>

          {questions.length > 0 ? (
            <div className="space-y-4">
              {questions.slice(0, 5).map((q, index) => (
                <div
                  key={q._id}
                  className="bg-white shadow rounded-lg p-4 border-l-4 border-primary"
                >
                  <p className="font-semibold">
                    {index + 1}. {q.question}
                  </p>

                  <div className="mt-2 text-sm text-gray-600 space-y-1">
                    <p>A. {q.options.A}</p>
                    <p>B. {q.options.B}</p>
                    <p>C. {q.options.C}</p>
                    <p>D. {q.options.D}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No CBT questions available</p>
          )}
        </section>
      </div>
    </>
  );
}

export default Blogs;