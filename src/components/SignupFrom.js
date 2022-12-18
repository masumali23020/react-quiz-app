import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import CheckBox from '../components/CheckBox'
import From from '../components/From'
import TextInput from '../components/TextInput'
import { useAuth } from "../contexts/AuthContext"
import classes from "../style/SignUp.module.css"


function SignupFrom() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState("");

  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  const { signup } = useAuth();
 const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault();
    // do validation
    if (password !== confirmPassword) {
      return setError("Passwords don't match!");
    }

    try {
      setError("");
      setLoading(true);
      await signup(email, password, username);
      navigate("/");
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError("Failed to create an account!");
    }
  }

  return (
    <>
 <From className={`${classes.signup}`} onSubmit={handleSubmit} >

<TextInput icon="person" type="text" placeholder="Inter Your Name" value={username} onChange={(e)=>setUsername(e.target.value)}  />

<TextInput icon="alternate_email" type="text" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}  />

<TextInput icon="lock" type="password" placeholder="Enter password" value={password} onChange={(e)=>setPassword(e.target.value)}   />

<TextInput icon="lock_clock" type="password" placeholder="Confirm password"  value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}  />

<CheckBox text="I agree to the Terms & Conditions" value={agree} onChange={(e)=>setAgree(e.target.value)}/>
<Button type="submit" disabled={loading}>
    <span> Submit now </span>

</Button>
{error && <p className="error">{error}</p>}
<div className="info">Already have an account? <Link to="/login">Login</Link> instead.</div>



</From>


    </>
  )
}



export default SignupFrom