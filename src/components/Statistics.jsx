import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const stats = [
  {
    value: 35000,
    label: "Students",
    color: "text-primary",
  },
  {
    value: 6500,
    label: "Video Lessons",
    color: "text-secondary",
  },
  {
    value: 550,
    label: "Study Notes",
    color: "text-primary",
  },
  {
    value: 20000,
    label: "CBT Questions",
    color: "text-secondary",
  },
];

// 🔥 Counter hook
function useCountUp(end, duration = 1500) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return count;
}

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function StatItem({ value, label, color }) {
  const count = useCountUp(value);

  return (
    <motion.div
      variants={item}
      whileHover={{ scale: 1.05 }}
      className="transition"
    >
      <h2 className={`text-2xl md:text-4xl font-bold ${color}`}>
        {value >= 1000 ? count.toLocaleString() + "+" : count}
      </h2>
      <p className="text-gray-600">{label}</p>
    </motion.div>
  );
}

function Statistics() {
  return (
    <section className="bg-surfaceHover py-16">
      <div className="container mx-auto px-10">

        <h2 className="text-2xl md:text-xl font-bold font-heading text-black text-center mb-12">
          Our statistics
        </h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          {stats.map((item, index) => (
            <StatItem
              key={index}
              value={item.value}
              label={item.label}
              color={item.color}
            />
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default Statistics;