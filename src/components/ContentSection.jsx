import { motion } from "framer-motion";
import {
  FaVideo,
  FaBookOpen,
  FaQuestionCircle,
  FaChartLine,
  FaPlay,
} from "react-icons/fa";

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
    description: "Detailed analytics that help you track your progress",
    icon: <FaChartLine />,
  },
  {
    title: "Live Lessons",
    description:
      "Live lessons with experts to help you navigate your journey",
    icon: <FaPlay />,
  },
];

// 🔥 Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

function ContentSection() {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-2xl font-bold font-heading text-gray-800 mb-3">
            Our App Has Everything You Need To Succeed
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto text-base">
            Learn smarter with quality educational resources designed to help students excel.
          </p>
        </div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {contents.map((item, index) => (
            <motion.div
              key={index}
              variants={card}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-xl transition duration-300"
            >
              {/* Icon */}
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-primary/10 text-primary text-lg mb-4">
                {item.icon}
              </div>

              {/* Title */}
              <h2 className="text-base md:text-lg font-semibold text-gray-800 mb-1">
                {item.title}
              </h2>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default ContentSection;