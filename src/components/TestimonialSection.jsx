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
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-800">
            What Our Students Say
          </h2>
          <p className="text-gray-600 mt-2">
            Real feedback from learners using LearnLift
          </p>
        </div>

        {/* testimonials */}
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-3xl shadow-sm hover:shadow-xl transition"
            >

              {/* stars */}
              <div className="flex mb-4 text-yellow-500">
                {Array(item.rating)
                  .fill()
                  .map((_, i) => (
                    <span key={i}>★</span>
                  ))}
              </div>

              {/* message */}
              <p className="text-gray-600 leading-relaxed mb-6">
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