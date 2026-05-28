import { Outlet, Link } from "react-router-dom"
import Logo from "../assets/Logo.svg"
import { FaHome, FaPlus, FaList } from "react-icons/fa"
import TopBar from "../components/TopBar"

function DashboardLayout() {
  return (
    <div className="min-h-screen flex bg-white">

      {/* Sidebar */}
      <aside className="w-64 bg-gray-100 p-4">

        <img
          src={Logo}
          alt="logo"
          className="w-36 h-36 -mt-16"
        />

        <nav className="flex flex-col gap-4">

          <Link
            className="text-primary font-heading text-lg flex items-center gap-2"
            to="/dashboard"
          >
            <FaHome className="text-xl" />
            Dashboard
          </Link>

          <Link
            className="text-primary font-heading text-lg flex items-center gap-2"
            to="/dashboard/create"
          >
            <FaPlus className="text-xl" />
            Create Blog
          </Link>

          <Link
            className="text-primary font-heading text-lg flex items-center gap-2"
            to="/dashboard/manage"
          >
            <FaList className="text-xl" />
            Manage Blogs
          </Link>

        </nav>

      </aside>

      {/* Main Section */}
      <div className="flex-1 flex flex-col">

        {/* Topbar */}
        <TopBar />

        {/* Page Content */}
        <main className="p-6 flex-1 overflow-y-auto">
          <Outlet />
        </main>

      </div>

    </div>
  )
}

export default DashboardLayout