
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import axios from  "axios"
import toast from "react-hot-toast"
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";

function SignUp() {

  const [showPassword, setShowPassword] = useState(false);
    const [user, setUser] =useState({
firstName:'',
lastName:'',
password:'',
email:''
    })
    function changeHandler(e) {
        const {name , value} = e.target
        setUser({...user, [name]:value})

    }  
    const navigate = useNavigate()

   async function submitHandler(e) {
        e.preventDefault()
        try {
            
            const res = await axios.post('http://localhost:8000/register',user)
            console.log(res);
             localStorage.setItem("token", res.data.token);
            toast.success('User Register successfully')
            navigate('/dashboard') 

        } catch (error) {
            toast.error(error.response.data.msg  || "Something went wrong");
            
        }
        
    }
  return (
     <div className=' bg-[#c48e97]  h-[100vh] py-4'>
        <Form className='w-[30%] mx-auto  p-4 bg-[#fff]' onSubmit={submitHandler}>
      <h1 className='text-emerald-800'>Sign Up</h1>
    

      <Form.Group className="mb-3" controlId="formBasicfirstName">
        <Form.Label> First Name:</Form.Label>
        <Form.Control type="text" placeholder="Joen"  value={user.firstName} name='firstName' onChange={changeHandler}/>
 
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasiclastName">
        <Form.Label>Last Name:</Form.Label>
        <Form.Control type="text" placeholder="Doe"  value={user.lastName}  name='lastName' onChange={changeHandler}/>
 
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email:</Form.Label>
        <Form.Control type="email" placeholder="joen@gmail.com"  value={user.email} name='email' onChange={changeHandler}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password:</Form.Label>
        <div className='relative'> 
        <Form.Control type={showPassword ? "text" : "password"} placeholder="******" value={user.password} name='password' onChange={changeHandler}/>
              <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500"
        >
          {showPassword ? (
            <FaRegEyeSlash  className="h-5 w-5" />
          ) : (
            <FaEye  className="h-5 w-5" />
          )}
        </button>
        </div>
      </Form.Group>

     
    
  
      <Button  type="submit" variant={'success'} >
        Submit
      </Button>
      <p> Already have an account? <Link to="/login">Login</Link></p>
    </Form>
    </div>
  )
}

export default SignUp
