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