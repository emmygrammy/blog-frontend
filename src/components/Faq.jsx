const faqs = [
  {
    question: "What is LearnLift App?",
    answer:
      "LearnLift App is an educational platform offering quality lessons for students at different learning stages.",
  },
  {
    question: "Can I access lessons on mobile?",
    answer:
      "Yes, the platform is fully responsive and works across mobile, tablet, and desktop devices.",
  },
  {
    question: "Are the lessons free?",
    answer:
      "Some lessons are free while premium courses require a subscription.",
  },
  {
    question: "Do you provide certificates?",
    answer:
      "Yes, certificates are awarded after successful completion of selected courses.",
  },
]; // <-- missing here


function FAQSection() {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">

        {/* heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-600 mt-2">
            Find answers to common questions about our platform.
          </p>
        </div>

        {/* faq items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="bg-white rounded-2xl shadow-sm p-5 group"
            >
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="text-lg font-semibold text-gray-800">
                  {faq.question}
                </h3>

                <span className="text-2xl font-bold text-primary transition-transform duration-300 group-open:rotate-45">
                  +
                </span>
              </summary>

              <p className="mt-4 text-gray-600 leading-relaxed">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;