

function DashboardHome() {
  return (
    <div>
        <div className="flex float-start gap-12">
          
          <div className="bg-gray-100 p-4 rounded-xl text-center container w-72 h-48">
              <h1  className="font-heading text-2xl text-black" >
                 30 blogs
              </h1>
          </div>
    
          <div className="bg-secondary p-4 rounded text-center container w-72 h-48">
              <h1 className="font-heading text-2xl text-white">
                 40 blogs
              </h1>
          </div>

          <div className="bg-primary p-4 rounded text-center container w-72 h-48">
              <h1  className="font-heading text-2xl text-white">
                 50 blogs
              </h1>
          </div>

      </div>
    </div>
  )
}
export default DashboardHome
