

const stats = [
  {
    value: "35,000+",
    label: "Students",
    color: "text-primaryHover"
  },
  // {
  //   value: "98%",
  //   label: "Pass Rate",
  //   color: "text-secondary"
  // },
  {
    value: "5000+",
    label: "Video Lessons",
    color: "text-secondary"
  },
  {
    value: "550+",
    label: "Study Notes",
    color: "text-primaryHover"
  },
  {
    value: "20,000+",
    label: "CBT Questions",
    color: "text-secondary"
  }
];



function Statistics() {
  return (
    <section className="bg-surfaceVariant py-16">
      <div className="container mx-auto px-10">
             <h2 className="text-xl md:text-xl font-bold font-heading text-indigo-600 text-center">
            Our statistics
            </h2>
             <div className="w-24 h-1 bg-indigo-600 rounded-full mx-auto mb-8 "></div>

               {/* Statistics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((item, index) => (
                <div key={index}>
                <h2 className={`text-2xl md:text-4xl font-bold ${item.color}`}>
                    {item.value}
                </h2>
                <p className="text-gray-600">{item.label}</p>
                </div>
            ))}
            </div>


        </div>
    </section>
  );
}

export default Statistics;