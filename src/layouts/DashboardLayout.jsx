import { Outlet, Link } from 'react-router-dom'
import Logo from '../assets/Logo.svg'
import { FaHome, FaPlus, FaList } from 'react-icons/fa'



function DashboardLayout() {
  return (
    <div className="min-h-screen flex bg-white">


   


      {/* Sidebar */}
      <aside className="w-64 bg-gray-100 text-white p-4 block">
          
           {/* logo */}

         <img src={Logo} 
         alt="logo" 
         className="w-36 h-36 -mt-16" 
         />

        {/* <h1 
        className="text-3xl mb-10 font-heading">
          Admin Panel
        </h1> */}

        <nav className="flex flex-col gap-4">

          <Link  className="text-primary font-heading text-lg flex items-center gap-2" 
          to="/dashboard">
           <FaHome className="text-xl" />
            Dashboard
          </Link>

          <Link  className="text-primary font-heading text-lg flex items-center gap-2" 
          to="/dashboard/create">
             <FaPlus className="text-xl" />
            Create Blog
          </Link>

          <Link  className="text-primary font-heading text-lg flex items-center gap-2" 
          to="/dashboard/manage">
             <FaList className="text-xl" />
            Manage Blogs
          </Link>

        </nav>

      </aside>

      {/* Main */}
      <main className="flex-1 p-6 overflow-y-auto">
        <Outlet />
      </main>

    </div>
  )
}

export default DashboardLayout