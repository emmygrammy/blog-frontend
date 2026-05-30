import api from './axios'



//get all blogs
export const getAllBlogs = async () => {
    const response = await api.get('/blog')
    return response.data.posts || []
}

//get blog by id
export const getBlogById = async (id) => {
    const response = await api.get(`/blog/${id}`)
    return response.data.post || {}
}


// Create news blog
export const createNewsBlog = async (data) => {
  const response = await api.post('/blog', data)
  return response.data
}

// Upload image for a news blog
export const uploadNewsImage = async (blogId, formData) => {
  const response = await api.post(
    `/blog/${blogId}/upload`,
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  )

  return response.data
}