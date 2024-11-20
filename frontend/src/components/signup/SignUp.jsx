import { useState } from "react"
import { Link } from "react-router-dom"
import Section from "../Section"
import Button from "../Button"
import GoogleIcon from "../../assets/svg/GoogleIcon"
import Header from "../Header"

const SignUp = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle sign up logic here
    console.log("Sign up with:", email, password)
  }

  return (
    <Section className="pt-[12rem] -mt-[5.25rem]" crosses>
      <Header />
      <br />
      <div className="container">
        <div className="relative z-1 max-w-[40rem] mx-auto text-center">
          <h1 className="h1 mb-6">Create your account</h1>
          <p className="body-1 max-w-[25rem] mx-auto mb-8 text-n-2">
            Join Brainwave and start exploring the endless possibilities of AI
            chatting.
          </p>
          <form onSubmit={handleSubmit} className="max-w-[25rem] mx-auto">
            <div className="mb-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="w-full px-4 py-3 bg-n-7 rounded-lg outline-none border border-n-6 focus:border-n-1/50 transition-colors"
              />
            </div>
            <div className="mb-6">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full px-4 py-3 bg-n-7 rounded-lg outline-none border border-n-6 focus:border-n-1/50 transition-colors"
              />
            </div>
            <Button className="w-full mb-4">Sign up</Button>
          </form>
          <Button className="w-full max-w-[25rem] mx-auto mb-4" white>
            <GoogleIcon className="mr-2 h-5 w-5" />
            Sign in with Google
          </Button>
          <p className="text-n-4 text-sm">
            Already have an account?{" "}
            <Link to="/signin" className="text-n-1 hover:text-color-1">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </Section>
  )
}

export default SignUp
