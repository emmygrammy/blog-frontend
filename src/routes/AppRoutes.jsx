import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Blogs from '../pages/Blogs'
import BlogContent from '../pages/BlogContent'
import About from '../pages/About'
import Contact from '../pages/Contact'
import NotFound from '../pages/NotFound'



const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/blogs/:id" element={<BlogContent />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            
             <Route path="*" element={<NotFound />} />
        </BrowserRouter>
    )
}

export default AppRoutes