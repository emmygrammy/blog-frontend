import { FaVideo, FaBookOpen, FaQuestionCircle, FaChartLine, FaPlay } from "react-icons/fa";

const contents = [
    {
      title: "Video Lessons",
      description: "Engaging video lessons",
      icon: <FaVideo />,
    },
    {
      title: "Quality Notes",
      description:
        "Concise and summarized notes to help you improve your studies",
      icon: <FaBookOpen />,
    },
    {
      title: "Topic by Topic CBT Questions",
      description:
        "Topic-by-topic CBT questions that give you a grasp on every topic",
      icon: <FaQuestionCircle />,
    },
    {
      title: "Year by Year CBT Questions",
      description:
        "1978 past questions till date that help you revise at a glance",
      icon: <FaQuestionCircle />,
    },
    {
      title: "Detailed Analytics",
      description:
        "Detailed analytics that help you track your progress",
      icon: <FaChartLine />,
    },
    {
       title: "Live Lessons",
      description: "Live lessons with experts to help you navigate your journey",
      icon: <FaPlay />,
    },
  ];



function ContentSection() {
  
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        {/* heading */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our App Has Everything You Need To Succeed
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Learn smarter with quality educational resources designed to help students excel.
          </p>
        </div>

        {/* cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {contents.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-primary/10 text-primary text-2xl mb-5">
                {item.icon}
              </div>

              <h2 className="text-xl font-bold text-gray-800 mb-2">
                {item.title}
              </h2>

              <p className="text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default ContentSection;