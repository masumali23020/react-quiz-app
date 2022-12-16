import React from 'react'
import Illustration from '../components/Illustration'
import LoginFrom from '../components/LoginFrom'
import imges from "../images/login.svg"

const Login = () => {
  return (
    <>
    <h1>Login to your account</h1>
    <div className="column">
        <Illustration>
        <img src={imges} alt="login" />
        </Illustration>
        <LoginFrom />
    </div>




    </>
  )
}

export default Login