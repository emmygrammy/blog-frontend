import pry from "../assets/pry.jpg";
import sec from "../assets/sec.jpg";
import jamb from "../assets/jamb.jpg";
import uni from "../assets/uni.jpg";

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
    <section className="py-10 px-6 bg-gray-100">

      {/* Heading */}
      <div className="text-center mb-5">
        <h2 className="text-2xl font-bold font-heading text-gray-800">
          Our Education Plan
        </h2>
      </div>

      {/* Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stages.map((item, index) => (
          <div
            key={index}
            className="
              bg-white rounded-2xl overflow-hidden
              shadow-sm hover:shadow-xl
              transition duration-300
              border border-transparent
              hover:border-[#EF767A]
              hover:bg-[#FFF5F5]
            "
          >

            {/* Image */}
            <img
              src={item.pic}
              alt={item.stage}
              className="w-full h-44 object-cover"
            />

            {/* Content */}
            <div className="p-4">

              {/* Badge */}
              <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-[#EF767A]/10 text-[#EF767A] mb-3">
                {item.stage}
              </span>

              {/* Title */}
              <h2 className="text-lg font-bold text-gray-800 mb-2">
                {/* {item.stage} */}
              </h2>

              {/* Description */}
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