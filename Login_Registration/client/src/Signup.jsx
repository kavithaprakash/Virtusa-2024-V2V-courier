import { Link } from "react-router-dom";
import {useState} from "react";
import axios from 'axios'
import { useNavigate} from "react-router-dom";

function Signup()
{
const [name,setName]= useState()
const [email,setEmail]= useState()
const [password,setPassword]= useState()
const navigate = useNavigate()
const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post('http://localhost:3001/register',{name,email,password})
    .then(result=>console.log(result))
    navigate('/login')
    .catch(err=>console.log(err))
}
    return (

<div className="d-flex justify-content-center">
    <div className="bg-white p-3 rounded w-25">
        <h2> Registration Page</h2>
        <form onSubmit={handleSubmit}>
            <div className ="mb-3">
                <label htmlFor="name">
                    <strong> Name</strong>
                </label>
                <input type = "text"
                placeholder ="Enter Name"
                autoComplete="off"
                name ="name"
                className="form-control rounded-0"
                onChange={(e)=> setName(e.target.value)}
                />

            </div>
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
Register
            </button>
            </form>
            <p> Already have an account </p>
            
            <Link to="/login" type="submit" className="btn btn-button border w-100 bg-light rounded-0">
login
            </Link>
      
    </div>
</div>
);
}

export default Signup;