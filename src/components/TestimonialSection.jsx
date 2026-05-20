function TestimonialSection() {
  const testimonials = [
    {
      name: "Amina Yusuf",
      role: "JAMB Student",
      message:
        "LearnLift helped me understand Biology and Physics so easily. The video lessons are very clear and simple!",
      rating: 5,
    },
    {
      name: "John David",
      role: "University Student",
      message:
        "The CBT practice questions improved my speed and confidence during exams. Highly recommended!",
      rating: 5,
    },
    {
      name: "Blessing Okafor",
      role: "Secondary Student",
      message:
        "The notes are very summarized and easy to revise. I love how organized everything is.",
      rating: 4,
    },
    {
      name: "Lily Brown",
      role: "High School Student",
      message:
        "I found LearnLift to be a great resource for my studies. The interactive platform made learning fun and effective.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 px-6 bg-[linear-gradient(to_top_left,theme('colors.secondary')_0%,theme('colors.secondary')_65%,theme('colors.primary')_100%)]">
      <div className="max-w-6xl mx-auto">

        {/* heading */}
        <div className="text-center mb-14">
          <h2 className="text-2xl font-bold text-primary">
            What Our Students Say
          </h2>
          <p className="text-white mt-2">
            Real feedback from learners using LearnLift
          </p>
        </div>

        {/* testimonials */}
        <div className="grid gap-8 md:grid-cols-4">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 w-max-4xl rounded-3xl shadow-sm hover:shadow-xl transition hover:bg-primary hover:text-white"
            >

              {/* stars */}
              <div className="flex mb-4 text-primary">
                {Array(item.rating)
                  .fill()
                  .map((_, i) => (
                    <span key={i}>★</span>
                  ))}
              </div>

              {/* message */}
              <p className="text-gray-600 leading-relaxed mb-6 hover:text-white">
                "{item.message}"
              </p>

              {/* user */}
              <div>
                <h4 className="font-bold text-gray-800">
                  {item.name}
                </h4>
                <p className="text-sm text-gray-500">
                  {item.role}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default TestimonialSection;