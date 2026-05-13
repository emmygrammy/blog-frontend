import pic1 from '../assets/pic1.jpg'
import { FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";

function HeroSection() {
  return (
    <div className="grid items-center md:grid-cols-2 gap-4">

      {/* LEFT */}
      <motion.div
        className="px-10 py-16"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-xl font-heading text-white px-6 py-2 text-center mb-6 container rounded-full bg-indigo-700 md:w-1/2 mx-auto shadow-lg">
          LearnLift App
        </h1>

        {/* features */}
        <div className="flex flex-col gap-4">
          <span className="text-xl md:text-3xl font-bold font-heading text-primary flex items-center gap-2">
            <FaCheck className="text-indigo-500 text-xl md:text-2xl shrink-0" />
            Video lessons
          </span>

          <span className="text-xl md:text-3xl font-bold font-heading text-indigo-500 flex items-center gap-2">
            <FaCheck className="text-indigo-500 text-xl md:text-2xl shrink-0" />
            Study notes
          </span>

          <span className="text-xl md:text-3xl font-bold font-heading text-primary flex items-center gap-2">
            <FaCheck className="text-indigo-500 text-xl md:text-2xl shrink-0">
            </FaCheck>
            Past questions
          </span>
        </div>

        {/* description */}
        <div className="mt-4 font-sans text-lg">
          <p>
            LearnLift App is a smart learning platform that helps students excel in exams with video lessons, simplified notes and CBT practice questions.
          </p>

          <p>
            Learn smarter, study confidently, and achieve academic success.
          </p>
        </div>
      </motion.div>

      {/* RIGHT */}
      <motion.div
        className="px-10 py-6"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src={pic1}
          alt="heroimg"
          className="w-full max-w-lg h-auto rounded-xl"
        />
      </motion.div>

    </div>
  )
}

export default HeroSection