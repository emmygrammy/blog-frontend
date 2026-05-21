import support from '../assets/support.jpg'



function ContactSection() {
  return (
    <section className="py-16 px-10">
        <div className="bg-gray-400 px-10 py-10 mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-10  ">

            <div className="col-span-1" >
                <h2 className="text-5xl font-medium font-heading text-justify tracking-wider text-secondary">
                    Need more 
                </h2>

                <h2 className="text-5xl font-medium font-heading text-center tracking-wider text-secondary">
                    clarification?
                </h2>

                <h3 className="text-lg font-bold text-center">
                    call us
                </h3>
                <p className="text-center">
                    080-12345678
                </p>

                <h3 className="text-lg font-bold text-center">
                    email us
                </h3>
                <p className="text-center">
                    info@learnlift.com
                </p>
                <h3 className="text-lg font-bold text-center">
                    visit us
                </h3>
                <p className="text-center">
                    123 Main St, Anytown, USA
                </p>
            </div>


             {/*image*/}
               <div className="col-span-1" >
                <img 
                src={support} 
                alt="contact" 
                className="w-3/4 h-64 object-cover rounded-b-lg" />
               </div>





        </div>
      
    </section>
  )
}
export default ContactSection