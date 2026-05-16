import pry from '../assets/pry.jpg'
import sec from '../assets/sec.jpg'
import jamb from '../assets/jamb.jpg'
import uni from '../assets/uni.jpg'

  const stages = [
    {
      stage: "Primary",
      description: "Quality video lessons for primary learners",
      pic: pry,
    },
    {
      stage: "Secondary",
      description: "Interactive learning resources for secondary students",
      pic: sec,
    },
    {
      stage: "Jamb and WAEC",
      description: "Comprehensive courses for Jamb, Waec, Neco, School of nursing students",
      pic: jamb,
    },
    {
      stage: "University",
      description: "Comprehensive courses for university students",
      pic: uni,
    },
  ];




function EducationPlan() {
  return (
    <section className="py-16 px-6 bg-gray-200">
      
      {/* heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800">
          Our Education Plan
        </h2>
      </div>

      {/* cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stages.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
          >
            <img
              src={item.pic}
              alt={item.stage}
              className="w-full h-52 object-cover"
            />

            <div className="p-5">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                {item.stage}
              </h2>

              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default EducationPlan;