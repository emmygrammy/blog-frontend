import api from './axios'



//get all blogs
export const getAllBlogs = async () => {
    const response = await api.get('/blogs')
    return response.data
}

//get blog by id
export const getBlogById = async (id) => {
    const response = await api.get(`/blogs/${id}`)
    return response.data
}