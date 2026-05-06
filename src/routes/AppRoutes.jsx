import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Blogs from '../pages/Blogs'
import BlogContent from '../pages/BlogContent'
import About from '../pages/About'
import Contact from '../pages/Contact'
import NotFound from '../pages/NotFound'
import MainLayout from '../layouts/MainLayout'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout Wrapper */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="blogs/:id" element={<BlogContent />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes