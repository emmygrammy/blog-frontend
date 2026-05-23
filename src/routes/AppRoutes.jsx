import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Blogs from '../pages/Blogs'
import BlogContent from '../pages/BlogContent'
import About from '../pages/About'
import Contact from '../pages/Contact'
import NotFound from '../pages/NotFound'

import MainLayout from '../layouts/MainLayout'
import DashboardLayout from '../layouts/DashboardLayout'

import Login from '../pages/dashboard/Login'
import DashboardHome from '../pages/dashboard/DashboardHome'
import CreateBlog from '../pages/dashboard/CreateBlog'
import EditBlog from '../pages/dashboard/EditBlog'
import ManageBlogs from '../pages/dashboard/ManageBlogs'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* ================= PUBLIC ROUTES ================= */}

        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="blogs/:id" element={<BlogContent />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        {/* ================= DASHBOARD LOGIN ================= */}

        <Route path="/dashboard/login" element={<Login />} />

        {/* ================= DASHBOARD ROUTES ================= */}

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="create" element={<CreateBlog />} />
          <Route path="edit/:id" element={<EditBlog />} />
          <Route path="manage" element={<ManageBlogs />} />
        </Route>

        {/* ================= 404 ================= */}

        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes