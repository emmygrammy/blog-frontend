import api from './axios'

// Get all CBT questions
export const getAllQuestions = async () => {
  const response = await api.get('/questions')
   return {
    questions: response.data.data || [],
    total: response.data.total || 0,
  };
}

// Get CBT question by ID
export const getQuestionById = async (id) => {
  const response = await api.get(`/questions/${id}`)
  return response.data.data || {}
}

// Create CBT question
export const createQuestion = async (data) => {
  const response = await api.post('/questions', data)
  return response.data
}

// Delete CBT question
export const deleteQuestion = async (id) => {
  const response = await api.delete(`/questions/${id}`)
  return response.data
}

// Update CBT question
export const updateQuestion = async (id, data) => {
  const response = await api.put(`/questions/${id}`, data)
  return response.data
}