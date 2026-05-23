import { Outlet } from 'react-router-dom'

function DashboardLayout() {
  return (
    <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 min-h-screen bg-primary text-white">
            sidebar

        </aside>
        {/* Main */}
     <main className="flex-1 p-6 bg-gray-400">
          <Outlet />
     </main>


    </div>
  )
}

export default DashboardLayout