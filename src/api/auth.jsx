import api from "./axios"

export const adminLogin = async (loginData) => {
  const response = await api.post(
    "/auth/login",
    loginData
  )

  return response.data
}