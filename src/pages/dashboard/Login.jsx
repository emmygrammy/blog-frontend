import Input from "../../components/Input"
import Button from "../../components/Button"
import { useState } from "react"
import { adminLogin } from "../../api/auth"

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const [authError, setAuthError] = useState("")
  const [success, setSuccess] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    setAuthError("")
    setSuccess("")

    if (!email || !password) {
      setAuthError("Please enter email and password")
      return
    }

    try {
      setLoading(true)

      const data = await adminLogin({
        email,
        password,
      })

      setSuccess("Login successful!")

      localStorage.setItem("token", data.token)

      setTimeout(() => {
        window.location.href = "/dashboard"
      }, 1000)

    } catch (error) {
      setAuthError(
        error?.response?.data?.message ||
        "Invalid email or password"
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-gray-100 w-full max-w-md rounded-xl p-10">

        <h1 className="text-3xl font-bold text-primary mb-6">
          Welcome Back!
        </h1>

        <form onSubmit={handleSubmit}>

          {/* AUTH ERROR (ONLY ONE PLACE) */}
          {authError && (
            <div className="bg-red-100 text-red-600 p-3 rounded-md mb-4 text-sm">
              {authError}
            </div>
          )}

          {/* SUCCESS MESSAGE */}
          {success && (
            <div className="bg-green-100 text-green-600 p-3 rounded-md mb-4 text-sm">
              {success}
            </div>
          )}

          <Input
            label="Email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            className="w-full bg-primary text-white rounded-xl mt-6 flex items-center justify-center gap-2"
            type="submit"
            disabled={loading}
          >
            {loading && (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            )}

            {loading ? "Logging in..." : "Login"}
          </Button>

        </form>

      </div>
    </div>
  )
}

export default Login