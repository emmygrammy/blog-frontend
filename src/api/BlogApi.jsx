import api from './axios'

// =====================
// BLOG CRUD
// =====================

// Get all blogs
export const getAllBlogs = async () => {
  const response = await api.get('/blog')
  return response.data.posts || []
}

// Get blog by ID
export const getBlogById = async (id) => {
  const response = await api.get(`/blog/${id}`)
  return response.data.post || {}
}

// Create blog
export const createBlog = async (data) => {
  const response = await api.post('/blog', data)
  return response.data.data
}

// Update blog
export const updateBlog = async (id, data) => {
  const response = await api.put(`/blog/${id}`, data)
  return response.data
}

// Delete blog
export const deleteBlog = async (id) => {
  const response = await api.delete(`/blog/${id}`)
  return response.data
}

// =====================
// IMAGE OPERATIONS
// =====================

// Upload image
export const uploadBlogImage = async (id, formData) => {
  const response = await api.post(
    `/blog/${id}/upload`,
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  )

  return response.data
}

// Replace/Edit image
export const updateBlogImage = async (id, formData) => {
  const response = await api.put(
    `/blog/${id}/image`,
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  )

  return response.data
}

// Delete image
export const deleteBlogImage = async (id) => {
  const response = await api.delete(`/blog/${id}/image`)
  return response.data
}