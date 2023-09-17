import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import "./Login.css"
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Login(){
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate=useNavigate()

  const handlesubmit =(e)=>{
    e.preventDefault();
    axios.post('http://localhost:3001/login',{email,password})
    .then(result => {console.log(result)
      if(result.data==="success") {
        navigate('/logged')
      }
    })
    .catch(err => console.log(err))
  }
    
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded-5 w-50 login_forum">
          <h2 className='login_heading'>Register</h2>
          <form onSubmit={handlesubmit}>
          <div className="mb-3">
            <label className='login_text' htmlFor="email">
                <strong>Email<sup>*</sup></strong>
            </label>
            <input  
             type="text"
             placeholder="Enter Email"
             autoComplete="off"
             name="email"
             className="form-control rounded-5 login_input"
             onChange={(e)=> setEmail(e.target.value)}
            /> 
          </div>
          <div className="mb-3">
            <label className='login_text' htmlFor="email">
                <strong>Password<sup>*</sup></strong>
            </label>
            <input 
             type="password"
             placeholder="Enter Password"
             autoComplete="off"
             name="password"
             className="form-control rounded-5 login_input"
             onChange={(e)=> setPassword(e.target.value)}
            /> 
          </div>
          <button type="sumbit" className="btn w-100 rounded-5">
            Login
          </button>
          </form>
      </div>
    </div>
    </div>
  )
}
