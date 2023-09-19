import React, { useState } from "react";
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
import "./Signup.css"

export default function Signup() {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate=useNavigate()

  const handlesubmit =(e)=>{
    e.preventDefault();
    axios.post('http://localhost:3001/register',{name,email,password})
    .then(result => {console.log(result)
    navigate('/login')
    })
    .catch(err => console.log(err));
  }

  return ( 
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded-5 w-50">
          <h2 className="register_heading">Register</h2>
          <form onSubmit={handlesubmit}>
          <div className="mb-3">
            <label className='register_text' htmlFor="email">
                <strong>Name<sup>*</sup></strong>
            </label>
            <input 
             type="text"
             placeholder="Enter name"
             autoComplete="off"
             name="email"
             className="form-control rounded-5 register_input"
             onChange={(e)=> setName(e.target.value)}
            /> 
          </div>

          <div className="mb-3">
            <label className='register_text' htmlFor="email">
                <strong>Email<sup>*</sup></strong>
            </label>
            <input 
             type="text"
             placeholder="Enter Email"
             autoComplete="off"
             name="email"
             className="form-control rounded-5 register_input"
             onChange={(e)=> setEmail(e.target.value)}
            /> 
          </div>
          <div className="mb-3">
            <label className='register_text' htmlFor="email">
                <strong>Password<sup>*</sup></strong>
            </label>
            <input 
             type="password"
             placeholder="Enter Password"
             autoComplete="off"
             name="password"
             className="form-control rounded-5 register_input"
             onChange={(e)=> setPassword(e.target.value)}
            /> 
          </div>
          <button type="sumbit" className="btn w-100 rounded-5">
            Register
          </button>
          </form>
          <Link to="/logged" className="btn btn-default border w-100 bg-light rounded-5 text-decoration-none mt-2">
          Already Have a Account?
          </Link>
      </div>
    </div>
  )
}
