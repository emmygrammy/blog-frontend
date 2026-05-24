import Input from "../../components/Input"
import Button from "../../components/Button"
import { useState } from "react"



function Login() {
 const [email, setEmail] = useState("")
 const [password, setPassword] = useState("")

 const handleSubmit = (e) => {
  e.preventDefault()
  if (!email || !password) {
    alert("Please enter email and password")
    return
  }
  console.log(email, password)
 }

 const handleLogin = () => {
  if (!email || !password) {
    alert("Please enter email and password")
    return
  }
  console.log(email, password)
 }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-gray-100 w-full max-w-md rounded-xl p-10">
        
        <h1 className="text-3xl font-bold text-primary mb-6">
          Welcome Back!
        </h1>

        <form onSubmit={handleSubmit}>
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
        className="w-full bg-primary text-white rounded-xl mt-10"
        type="submit"
        onClick={handleLogin}>
          Login
          </Button>
        </form>
      </div>
    </div>
  )
}

export default Login