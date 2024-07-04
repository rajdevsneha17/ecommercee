import axios from 'axios'
import React, { useState } from 'react'

const OTP = () => {
    const [data,setData]=useState({
        otp:""
    })
//     const submitHandler=(event)=>{
//        event.preventDefault()
//        try{
// axios.post("https://ecommerceback-vefk.vercel.app/api/v1/sendMail",data,)
//        }catch(error){
// console.log("error is",error)
//        }
//     }

const submitHandler = async (event) => {
  event.preventDefault();
  try {
      const response = await axios.post('https://ecommerceback-vefk.vercel.app/api/v1/sendmail', data, {
          headers: {
              'Content-Type': 'application/json'
          },
          withCredentials: true
      });
      console.log('Response:', response.data);
  } catch (error) {
      console.log('Error:', error);
  }
};
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
