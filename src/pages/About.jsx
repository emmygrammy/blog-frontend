import TopSection from "../components/TopSection";
import {
  BookOpen,
  Brain,
  Trophy,
  Users,
  Target,
  Rocket,
} from "lucide-react";

function About() {
  const features = [
    {
      icon: <BookOpen size={30} />,
      title: "Quality Learning Materials",
      description:
        "Access carefully prepared study resources and educational content.",
    },
    {
      icon: <Brain size={30} />,
      title: "CBT Practice",
      description:
        "Test your knowledge with interactive computer-based practice questions.",
    },
    {
      icon: <Trophy size={30} />,
      title: "Exam Success",
      description:
        "Prepare effectively and improve your chances of academic success.",
    },
  ];

  return (
    <>
      <TopSection
        className="text-center md:text-left"
        title="About LearnLift"
        subtitle="Empowering students with modern learning tools and exam preparation resources."
      />

      <div className="max-w-7xl mx-auto px-4 py-16 space-y-20">

        {/* Mission */}
        <section className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-secondary mb-4">
              Our Mission
            </h2>

            <p className="text-gray-600 leading-relaxed">
              LearnLift was created to help students learn smarter, prepare
              better, and achieve academic excellence. We combine educational
              resources, CBT practice tests, and informative content in one
              easy-to-use platform.
            </p>
          </div>

          <div className="bg-primary/10 rounded-2xl p-8">
            <Target size={50} className="text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">
              Building Better Learners
            </h3>
            <p className="text-gray-600">
              Our goal is to make learning accessible, engaging, and effective
              for every student.
            </p>
          </div>
        </section>

        {/* Features */}
        <section>
          <h2 className="text-3xl font-bold text-center text-secondary mb-10">
            What We Offer
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition"
              >
                <div className="text-primary mb-4">{feature.icon}</div>

                <h3 className="font-bold text-lg mb-2">
                  {feature.title}
                </h3>

                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="bg-secondary text-white rounded-2xl p-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <Users size={35} className="mx-auto mb-3" />
              <h3 className="text-3xl font-bold">1000+</h3>
              <p>Students</p>
            </div>

            <div>
              <BookOpen size={35} className="mx-auto mb-3" />
              <h3 className="text-3xl font-bold">500+</h3>
              <p>Study Materials</p>
            </div>

            <div>
              <Brain size={35} className="mx-auto mb-3" />
              <h3 className="text-3xl font-bold">2000+</h3>
              <p>Practice Questions</p>
            </div>

            <div>
              <Trophy size={35} className="mx-auto mb-3" />
              <h3 className="text-3xl font-bold">95%</h3>
              <p>Success Rate</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <Rocket size={50} className="mx-auto text-primary mb-4" />

          <h2 className="text-3xl font-bold text-secondary mb-4">
            Start Learning Today
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Join LearnLift and gain access to learning resources, CBT practice
            tests, and tools designed to help you succeed academically.
          </p>

          <button className="bg-primary text-white px-8 py-3 rounded-lg hover:opacity-90 transition">
            Get Started
          </button>
        </section>

      </div>
    </>
  );
}

export default About;