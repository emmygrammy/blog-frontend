
function EducationPlan(){
  return (
    <div className="px-10 py-16">


        { /* 1. parent container */}
        <div className="container mx-auto px-4 bg-rose-50 rounded-3xl shadow-md p-12">
      
      <h2 className="text-2xl font-bold font-heading text-indigo-600 text-center">
        Education Plan
      </h2>

      {/* underline */}
      <div className="w-12 h-2 bg-indigo-600 rounded-full mx-auto "></div>

      <div className="grid md:grid-cols-4 gap-8 mt-12">
        <div className="bg-white p-8 rounded-md shadow-md">
          <h3 className="text-lg font-bold text-indigo-600">Free</h3>
          <p className="text-sans text-lg">
            Start with a free trial and explore the features of LearnLiftApp.
          </p>
        </div>
      </div>



     </div>
    </div>
  )
}

export default EducationPlan