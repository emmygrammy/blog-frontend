import pic1 from '../assets/pic1.jpg'
import { FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";

function HeroSection() {
  return (
    <section className="bg-white py-16">
      
      {/* CONTAINER (proper spacing for mobile + desktop) */}
      <div className="container mx-auto px-6 md:px-10 shadow-md rounded-3xl py-16">

        {/* GRID */}
        <div className="grid items-center gap-12 md:grid-cols-2">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="px-1 md:px-0"
          >

            {/* BADGE */}
            <h1 className="bg-primaryDark text-white text-center font-heading text-lg px-6 py-3 rounded-full shadow-lg block mb-8 mx-auto w-1/2">
              LearnLift App
            </h1>

            {/* FEATURES */}
            <div className="flex flex-col gap-5">

              <div className="flex items-center gap-3">
                <FaCheck className="text-indigo-500 text-xl shrink-0" />
                <span className="text-lg md:text-4xl font-bold font-heading text-primary">
                  Video Lessons
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheck className="text-indigo-500 text-xl shrink-0" />
                <span className="text-lg md:text-4xl font-bold font-heading text-indigo-500">
                  Study Notes
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheck className="text-indigo-500 text-xl shrink-0" />
                <span className="text-lg md:text-4xl font-bold font-heading text-primary">
                  Past Questions
                </span>
              </div>

            </div>

            {/* DESCRIPTION */}
            <div className="mt-8 space-y-4 text-base md:text-lg font-sans text-gray-700 leading-relaxed">
              <p>
                LearnLift App is a smart learning platform that helps students
                excel in exams with video lessons, simplified notes, and CBT practice questions.
              </p>

              <p>
                Learn smarter, study confidently, and achieve academic success.
              </p>
            </div>

          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <img
              src={pic1}
              alt="heroimg"
              className="w-full max-w-xl rounded-2xl "
            />
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default HeroSection