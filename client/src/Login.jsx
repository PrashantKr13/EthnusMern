import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import { useMyContext } from './Logged.jsx';
import './loginstyle.css'
import fitnessLogin from './assets/img/fitnesslogin.png'

const Login = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const { isLogged, setisLogged } = useMyContext()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/login', { email, password }).then(result => {
            console.log(result)
            if (result.data === "Success") {
                setisLogged(true)
                navigate('/home')
            }
        }).catch(err => console.log(err))
    }



    return (

        <div className="containe">
    {/* <!-- Left Half --> */}
    <div className="right-half">
      <img src={fitnessLogin} alt="Login Image" className="img-fluid"/>
    </div>
    
    {/* <!-- Right Half --> */}
    <div className="left-half">
        <div className="login-form">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="inputEmail">Email address</label>
                    <input type="email" className="form-control" id="inputEmail" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="inputPassword">Password</label>
                    <input type="password" className="form-control" id="inputPassword" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
            <p className="mt-3">Not a user! <Link to="/register">Register</Link></p>
        </div>
    </div>
  </div>
    )
}

export default Login