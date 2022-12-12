import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import From from '../components/From'
import TextInput from '../components/TextInput'
import { useAuth } from '../contexts/AuthContext'
import classes from "../style/SignUp.module.css"

const LoginFrom = () => {
    const {login} = useAuth()

    const [loading, setLoading] = useState()
    const [user, setUser] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const navigate = useNavigate()

    async function handelSubmit(e){
        e.preventDefault()
        

        try {
            setLoading(true);
            await login(email,password)
            navigate("/")

            
        } catch (error) {
            setLoading(false)
            console.log(error);
            setError("spmthing wron ")
            
        }
    }
  return (
    <>
          <From  className={`${classes.signup}`} onSubmit={handelSubmit}>
            <TextInput required type="text" placeholder="Enter email" icon="alternate_email" value={email} onChange={(e)=> setEmail(e.target.value)}  />

            <TextInput required type="password" placeholder="Enter password" icon="lock" value={password} onChange={(e)=> setPassword(e.target.value)}  />
           <Button type="button" disabled={loading}>
            Submit now
           </Button>
           <div className="info">Don't have an account? <Link to="/signup">Signup</Link> instead.</div>
           {error && <p className="error">{error}</p>}

        </From>
    </>
  )
}

export default LoginFrom