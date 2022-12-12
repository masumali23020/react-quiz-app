import React from 'react'
import Illustration from '../components/Illustration'
import SignupFrom from '../components/SignupFrom'
import image from "../images/signup.svg"
const SignUp = () => {
  return (
    <>
      <h1>Create an account</h1>
      <div class="column">
        <Illustration>
        <img src={image} alt="Signup" />
           </Illustration>
           <SignupFrom />
     

      </div>
    </>
  )
}

export default SignUp