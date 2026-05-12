import pic1 from '../assets/pic1.jpg'

function HeroSection() {
  return (
    <div className="grid gap-10 items-center md:grid-cols-2">

        {/* left part of hero section */}
        <div className="px-10 py-16">
            <h1 className="text-xl font-bold text-heading text-primary italic text-center mb-16 container rounded-xl bg-secondary">
                LearnLift App
            </h1>

             <span className="text-3xl font-bold text-sans text-primary">
              Watch video lessons, 
            </span>

            <span className="text-3xl font-bold text-sans text-primary">
              read notes, 
            </span>

            <span className="text-3xl font-bold text-sans text-primary">
              pratice cbt 
            </span>

             <p>
             LearnLift App is a smart learning platform that helps students excel in exams with video lessons, simplified notes, and CBT practice questions.
             </p>

             <p>
             Learn smarter, study confidently, and achieve academic success.
             </p>
        </div>
        {/* right part of hero section */}
        <div className="">
            <img 
            src={pic1} 
            alt="heroimg" 
            className="w-full max-w-lg h-auto rounded-xl" />
        </div>

    </div>
  )
}
export default HeroSection