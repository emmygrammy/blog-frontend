import pp1 from '../assets/phone/pp1.png'
import { LINK } from '../constants/Link.jsx'

import { FaCheck, } from "react-icons/fa";
import { motion } from "framer-motion";
import Button from "./Button.jsx";
import { FaArrowDown } from 'react-icons/fa6';

function HeroSection() {
  return (
    <section className="px-4 md:px-8 py-6">
      
      {/* CONTAINER (proper spacing for mobile + desktop) */}
      <div className=" container px-6 mx-auto md:px-8 shadow-md rounded-3xl py-16 border-2 border-black">

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
            <h1 className="bg-primary text-white text-center font-heading text-lg px-6 py-3 rounded-full shadow-lg block mb-8 mx-auto lg:w-1/2 ">
              our core features
            </h1>

            {/* FEATURES */}
            <div className="flex flex-col gap-2">

              <div className="flex items-center gap-3">
                <FaCheck className="text-primary text-xl shrink-0" />
                <span className="text-lg md:text-2xl font-bold font-heading text-secondary">
                  Video Lessons
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheck className="text-primary text-xl shrink-0" />
                <span className="text-lg md:text-2xl font-bold font-heading text-secondary">
                  Study Notes
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheck className="text-primary text-xl shrink-0" />
                <span className="text-lg md:text-2xl font-bold font-heading text-secondary">
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

             <div className="flex flex-col md:flex-row flex-wrap items-center md:items-start gap-4 pt-4 w-full">
  
                  <Button
                    onClick={() => window.open(LINK.PLAY_STORE)}
                    className="w-full justify-center md:w-auto min-w-0 bg-primary text-white font-heading"
                    icon={<FaArrowDown className="text-white text-xl shrink-0" />}
                  >
                    Play Store
                  </Button>

                  <Button
                    onClick={() => window.open(LINK.APP_STORE)}
                    className="w-full justify-center md:w-auto min-w-0 bg-secondary text-white font-heading"
                    icon={<FaArrowDown className="text-white text-xl shrink-0" />}
                  >
                    App Store
                  </Button>

              </div>

              
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
              src={pp1}
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