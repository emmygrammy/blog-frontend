import { FaEnvelope, FaWhatsapp } from "react-icons/fa";
import emma from "../assets/emma.png";
import pee from "../assets/pee.png";

function FoundersSection() {
  const founders = [
    {
      image: emma,
      tutor: "Sir Emmy",
      description:
        "15 years experience in teaching Biology, Anatomy, Physics, and Mathematics",
    },
    {
      image: pee,
      tutor: "Sir Pee",
      description:
        "15 years experience in teaching Chemistry, Biology, Anatomy, and English",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">

        {/* heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-800">
            Meet Our Founders
          </h2>
          <p className="text-gray-600 mt-2">
            Experienced tutors dedicated to your academic success
          </p>
        </div>

        {/* cards */}
        <div className="grid gap-10 md:grid-cols-2">
          {founders.map((person, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              {/* image */}
              <img
                src={person.image}
                alt={person.tutor}
                className="w-full h-72 object-cover"
              />

              {/* content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800">
                  {person.tutor}
                </h3>

                <p className="text-gray-600 mt-3 leading-relaxed">
                  {person.description}
                </p>

                {/* contact icons */}
                <div className="flex items-center gap-4 mt-5">
                  
                  <a
                    href="mailto:example@gmail.com"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-blue-500 hover:text-white transition"
                  >
                    <FaEnvelope />
                  </a>

                  <a
                    href="https://wa.me/2340000000000"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-green-500 hover:text-white transition"
                  >
                    <FaWhatsapp />
                  </a>

                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default FoundersSection;