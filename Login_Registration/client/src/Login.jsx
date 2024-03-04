
import { Link } from "react-router-dom";
import {useState} from "react";
import axios from 'axios'
import { useNavigate} from "react-router-dom";

function Login()
{
    const [name,setName]= useState()
const [email,setEmail]= useState()
const [password,setPassword]= useState()
const navigate = useNavigate()
const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post('http://localhost:3001/login',{name,email,password})
    .then(result=> {
    console.log(result)
    if(result.data ==="Success")
    {
        navigate('/home')
    }
    })
    .catch(err=>console.log(err))
}
return(
<div className="d-flex justify-content-center">
    <div className="bg-white p-3 rounded w-25">
        <h2> Login</h2>
        <form onSubmit={handleSubmit}>
            
            <div className ="mb-3">
                <label htmlFor="email">
                    <strong> Email</strong>
                </label>
                <input type = "text"
                placeholder ="Enter Email"
                autoComplete="off"
                name ="email"
                className="form-control rounded-0"
                onChange={(e)=> setEmail(e.target.value)}
                />

            </div>

            <div className ="mb-3">
                <label htmlFor="password">
                    <strong> Password</strong>
                </label>
                <input type = "text"
                placeholder ="Enter password"
                autoComplete="off"
                name ="password"
                className="form-control rounded-0"
                onChange={(e)=> setPassword(e.target.value)}
                />

            </div>


            <button type="submit" className="btn btn-success w-100 rounded-0"> 
            Login
            </button>
            </form>
            <p> Dont have an account!! Register here</p>
            
            <Link to="/register" type="submit" className="btn btn-button border w-100 bg-light rounded-0">
Sign Up
            </Link>
      
    </div>
</div>

)
}
export default Login;