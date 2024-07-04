import React, { useState } from 'react'
import axios from 'axios'
import { NavLink, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

// import { Link } from 'react-router-dom'
const Login = () => {
    const navigate=useNavigate()
    const [data,setData]=useState({
        email:"",
        password:""
    })
    //event: This represents the event object that is passed to the event handler function
    //target: it represents the element on which the event occurred.
    //value: This is a property of the target element (event.target.value) 
    //that represents the current value of the input field or form element when the event occurred.
    const changeHandler=(event)=>{
      setData((prev)=>({
      ...prev,
      [event.target.name]:event.target.value
      }))
    }
    const submitHandler=async (event)=>{
     event.preventDefault()
     try{
      const res=await axios.post("https://ecommerceback-o9cs.vercel.app/api/v1/login",data).then(res=>{
        if(res.data=="incorrect"){
            toast.error("Incorrect Password")
        }
        else if(res.data=="notexist"){
            toast.error("signup first")
        }
        
        else {
            navigate("/")
            toast.success("Login Successfully")
        }
      }).catch(error=>{
       
          console.log(error)
      })
      
      console.log(res)
     }catch(error){

     }
    }
  return (
   
    <div>
      
       <div className='flex justify-center items-center w-12/12 h-screen'>
     <div className='flex flex-col w-96 h-80 bg-white mb-32 shadow-[0_3px_10px_rgb(0,0,0,0.2)] pt-2 '>
     <div className='flex flex-col gap-5 pl-8 mt-5'>
     <label>Enter your Email</label>
      <input type="email" onChange={changeHandler} name="email" value={data.email} className='border-2 border-gray-300 rounded-md p-2 w-80' ></input>
     </div>
     <div className='flex flex-col gap-6 pl-8'>
     <div className='mt-5 '><label>Enter your Password</label></div>
      <input type="password" onChange={changeHandler} name="password" value={data.password} className='border-2 border-gray-300 rounded-md p-2 w-80 flex justify-center items-center 'minlength="8"></input>
     </div>
     <div className='flex justify-center items-center  mt-7 '>
        <button type="submit" onClick={submitHandler} className='border-2 border-gray-300 rounded-md p-2 pl-4 pr-4 hover:bg-slate-300  '>Login</button>
    </div>
    <div className='flex justify-center items-center mt-10'><NavLink to="/signup">Don't have an account ? Signup</NavLink></div>
    </div>
    
     </div>
    </div>
     
 
  )
}

export default Login
