import React from 'react'
import Button from '../components/Button'
import CheckBox from '../components/CheckBox'
import From from '../components/From'
import Illustration from '../components/Illustration'
import TextInput from '../components/TextInput'
import classes from "../style/SignUp.module.css"

const SignUp = () => {
  return (
    <>
      <h1>Create an account</h1>
      <div class="column">
        <Illustration />
        <From className={`${classes.signup}`} >

            <TextInput icon="person" type="text" placeholder="Inter Your Name"  />

            <TextInput icon="alternate_email" type="text" placeholder="Enter email"  />
           
            <TextInput icon="lock" type="password" placeholder="Enter password"   />
           
            <TextInput icon="lock_clock" type="password" placeholder="Confirm password"   />

            <CheckBox text="I agree to the Terms & Conditions" />
            <Button>
                Submit now 

            </Button>
            <div className="info">Already have an account? <a href="login.html">Login</a> instead.</div>



        </From>

      </div>
    </>
  )
}

export default SignUp