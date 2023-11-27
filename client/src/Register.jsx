import { Link } from "react-router-dom"
import { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import './registerstyle.css'
import fitnessRegister from './assets/img/fitnessRegister.png'


function SignUp(){
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/register', {name, email, password}).then(result=>{console.log(result)
        navigate('/login')
    }).catch(err=>console.log(err))
    }

    return (

<div className="containe">
    {/* <!-- Right Half --> */}
    <div className="right-half">
        <img src={fitnessRegister} alt="Login Image" className="img-fluid"/>
    </div>

    {/* <!-- Left Half --> */}
    <div className="left-half">
        <div className="registration-form">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="inputUsername">Username</label>
                    <input type="text" className="form-control" id="inputUsername" placeholder="Enter username" onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="inputEmail">Email address</label>
                    <input type="email" className="form-control" id="inputEmail" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="inputPassword">Password</label>
                    <input type="password" className="form-control" id="inputPassword" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
            <p className="mt-3">Already a user? <Link to="/login">Login</Link></p>
        </div>
    </div>
</div>
    )
}

export default SignUp