import axios from 'axios'
import React, { useState } from 'react'

const OTP = () => {
    const [data,setData]=useState({
        otp:""
    })
    const submitHandler=(event)=>{
       event.preventDefault()
       try{
axios.post("http://localhost:7000/api/v1/sendMail",data)
       }catch(error){
console.log("error is",error)
       }
    }
    const changeHandler=(event)=>{
       setData((prev)=>({
        ...prev,
        [event.target.name]:[event.target.value]
       }))
    }

    
  return (
    <div>
      <input type="text" placeholder='fill otp' onChange={changeHandler} name='otp'></input>
      <button onClick={submitHandler}>Submit</button>
    </div>
  )
}

export default OTP
