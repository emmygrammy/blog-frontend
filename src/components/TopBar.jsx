function Topbar() {
  const adminEmail = localStorage.getItem("adminEmail")

  return (
    <div className="bg-white h-16 shadow-xl border-b px-6 flex items-center justify-between rounded-md">

      <h1 className="text-xl font-semibold text-gray-700">
        Admin Dashboard
      </h1>

      <div className="flex items-center gap-3">

        {/* Admin Image */}
        <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
          A
        </div>

        {/* Admin Info */}
        <div>
          <p className="text-sm font-medium text-gray-700">
            Admin
          </p>

          <p className="text-xs text-gray-500">
            {adminEmail}
          </p>
        </div>

      </div>
    </div>
  )
}

export default Topbar