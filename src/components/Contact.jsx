import support from "../assets/support.jpg";
import { FaPhone, FaEnvelope, FaWhatsapp } from "react-icons/fa";

function ContactSection() {
  return (
    <section className="py-16 px-4 md:px-10">

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* TEXT SECTION */}
        <div>

          {/* Heading */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium font-heading text-secondary tracking-wide">
            Need more
          </h2>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium font-heading text-secondary tracking-wide mb-6">
            clarification?
          </h2>

          {/* Call */}
          <h3 className="text-lg md:text-xl font-medium font-sans text-primary">
            Call us:
          </h3>

          <p className="flex items-center gap-2 text-lg md:text-2xl font-heading font-medium text-secondary mb-4">
            <FaPhone className="rotate-90 text-xl text-secondary" />
            +234 070-30693452
          </p>

          {/* Email */}
          <h3 className="text-lg md:text-xl font-medium font-sans text-primary">
            Email us
          </h3>

          <p className="flex items-center gap-2 text-lg md:text-2xl font-heading font-medium text-secondary mb-4">
            <FaEnvelope className="text-xl text-secondary" />
            learnlift247@gmail.com
          </p>

          {/* WhatsApp */}
          <h3 className="text-lg md:text-xl font-medium font-sans text-primary">
            Message us
          </h3>

          <p className="flex items-center gap-2 text-lg md:text-2xl font-heading font-medium text-secondary">
            <FaWhatsapp className="text-2xl text-[#25D366]" />
            +234 070-30693452
          </p>

        </div>

        {/* IMAGE */}
        <div>
          <img
            src={support}
            alt="contact"
            className="w-full h-auto rounded-2xl object-cover shadow-md"
          />
        </div>

      </div>
    </section>
  );
}

export default ContactSection;