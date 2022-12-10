import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import CheckBox from '../components/CheckBox'
import From from '../components/From'
import Illustration from '../components/Illustration'
import TextInput from '../components/TextInput'
import image from "../images/signup.svg"
import classes from "../style/SignUp.module.css"
const SignUp = () => {
  return (
    <>
      <h1>Create an account</h1>
      <div class="column">
        <Illustration>
        <img src={image} alt="Signup" />
           </Illustration>
        <From className={`${classes.signup}`} >

            <TextInput icon="person" type="text" placeholder="Inter Your Name"  />

            <TextInput icon="alternate_email" type="text" placeholder="Enter email"  />
           
            <TextInput icon="lock" type="password" placeholder="Enter password"   />
           
            <TextInput icon="lock_clock" type="password" placeholder="Confirm password"   />

            <CheckBox text="I agree to the Terms & Conditions" />
            <Button>
                <span> Submit now </span>

            </Button>
            <div className="info">Already have an account? <Link to="/login">Login</Link> instead.</div>



        </From>

      </div>
    </>
  )
}

export default SignUp