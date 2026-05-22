import TopSection from '../components/TopSection'
import { getAllBlogs } from '../api/Blog'
import { useState, useEffect } from 'react'

function Blogs() {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getAllBlogs().then((data) => {
      setBlogs(data)
      setLoading(false)
    })
  }, [])
  
  if (loading) {
    return <div className="text-center text-2xl font-bold text-primary">
      Loading...</div>
  }
  
  return (
    <>
      <TopSection className="text-center  md:text-left"
        title="Blogs"
        subtitle="Read our latest blogs and articles on study tips, exam preparation, and more"
      />

      <div className="grid md:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div key={blog._id} className="bg-white shadow-md rounded-xl p-4">
            <h2 className="font-bold text-xl">{blog.title}</h2>
            <p className="text-gray-600 mt-2">
              {blog.description?.slice(0, 100)}...
            </p>
          </div>
        ))}
      </div>
     
    </>
  )
}

export default Blogs
