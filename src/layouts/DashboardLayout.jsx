import { Outlet, Link } from 'react-router-dom'

function DashboardLayout() {
  return (
    <div className="min-h-screen flex bg-gray-100">

      {/* Sidebar */}
      <aside className="w-64 bg-primary text-white p-6">

        <h1 className="text-3xl mb-10 font-heading">
          Admin Panel
        </h1>

        <nav className="flex flex-col gap-4">

          <Link to="/dashboard">
            Dashboard
          </Link>

          <Link to="/dashboard/create">
            Create Blog
          </Link>

          <Link to="/dashboard/manage">
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