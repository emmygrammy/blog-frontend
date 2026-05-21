import support from '../assets/support.jpg'
import { FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa'



function ContactSection() {
  return (
    <section className="py-16 px-10">
        <div className="px-10 py-10 mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10  ">

            <div className="col-span-1"  >
                <h2 className="text-7xl font-medium font-heading text-start tracking-wider text-secondary">
                    Need more 
                </h2>

                <h2 className="text-7xl font-medium font-heading text-start tracking-wider text-secondary mb-8">
                    clarification?
                </h2>

                <h3 className="text-xl font-medium text-start font-sans text-primary ">
                    call us:
                </h3>
                <p className="flex items-center justify-start text-start text-2xl font-heading font-medium text-secondary mb-4">
                    <FaPhone className="rotate-90 text-2xl text-secondary" />
                    +234 070-30693452 
                </p>

                <h3 className="text-xl font-medium text-start font-sans text-primary ">
                    Email us
                </h3>
                <p className="flex items-center justify-start text-start text-2xl font-heading font-medium text-secondary mb-4">
                    <FaEnvelope className="text-xl text-secondary mr-1" />
                    learnlift247@gmail.com
                </p>

                 <h3 className="text-xl font-medium text-start font-sans text-primary ">
                    Message us
                </h3>
                <p className="flex items-center justify-start text-start text-2xl font-heading font-medium text-secondary ">
                    <FaWhatsapp className="text-2xl text-[#25D366] hover:scale-110 transition" />
                    +234 070-30693452
                </p>
                
            </div>


             {/*image*/}
               <div className="col-span-1" >
                <img 
                src={support} 
                alt="contact" 
                className="w-full h-full object-cover rounded-b-lg" />
               </div>





        </div>
      
    </section>
  )
}
export default ContactSection