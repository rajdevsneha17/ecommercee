import axios from 'axios'
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate,Link } from 'react-router-dom';
//import Bag from "../assets/Bag.avif"
 // import Bag1 from "../assets/Bag2.avif"
import Bag2 from "../assets/Bag3.avif"
const Signup = () => {
    const navigate=useNavigate()
    const [error, setError] = useState('');
    const[login,setSignup]=useState(false)
    const[data,setData]=useState({
        firstname:"",
        lastname:"",
        email:"",
        password:""
    })
    const changeHandler=((event)=>{
      setData((prev)=>({
        ...prev,
         [event.target.name]:event.target.value
      }))
    })
    const submitHandler=async(event)=>{
        event.preventDefault()
        if (!data.email || !data.firstname || !data.lastname|| !data.password) {
            setError("please fill all the fields")
        setTimeout(()=>{
          setError(" ")
        },3000)
         return;
           
        }
        try {
            const response = await axios.post("https://ecommerceback-o9cs.vercel.app/api/v1/sendmail",data)
            .then(res=>{
                if(res.data=="exist"){
               
                toast.error("Already Signed in ")
                navigate("/login")
                }
                else {
                    console.log("jkj")
                    toast.success("Signup Successfully")
                    navigate("/") 
                    setSignup(true)
                }
              }).catch(error=>{
                toast.error("signup wrong details")
                  console.log(error)
              })
              console.log(response);
           
        } catch (error) {
            console.log(error)
            
        }
    }
    
  return (
    <div className="flex flex-col lg:flex-row w-full h-screen justify-center items-center">
            <div className="lg:w-6/12 w-full h-full flex justify-center items-center lg:mt-0 mt-10">
                <form onSubmit={submitHandler} className="w-96 p-6 bg-white shadow-md rounded-lg">
                    <div className="flex flex-col gap-5">
                        <label className="mt-2">Enter Your Firstname</label>
                        <input
                            type="text"
                            onChange={changeHandler}
                            name="firstname"
                            value={data.firstname}
                            className="border-2 border-gray-300 rounded-md p-2 w-full"
                        />
                    </div>
                    <div className="flex flex-col gap-5 mt-5">
                        <label>Enter Your Lastname</label>
                        <input
                            type="text"
                            onChange={changeHandler}
                            name="lastname"
                            value={data.lastname}
                            className="border-2 border-gray-300 rounded-md p-2 w-full"
                        />
                    </div>
                    <div className="flex flex-col gap-5 mt-5">
                        <label>Enter Email</label>
                        <input
                            type="email"
                            onChange={changeHandler}
                            name="email"
                            value={data.email}
                            className="border-2 border-gray-300 rounded-md p-2 w-full"
                        />
                    </div>
                    <div className="flex flex-col gap-5 mt-5">
                        <label>Enter Password</label>
                        <input
                            type="password"
                            onChange={changeHandler}
                            name="password"
                            value={data.password}
                            className="border-2 border-gray-300 rounded-md p-2 w-full"
                            maxLength="8"
                        />
                    </div>
                    <div className="flex justify-center items-center mt-6">
                        <button type="submit" className="border-2 border-gray-300 rounded-md p-2 pl-4 pr-4 hover:bg-slate-300">
                            Submit
                        </button>
                    </div>
                    {error && <div className="text-red-500 text-center mt-3">{error}</div>}
                    <div className="text-center mt-5">
                        Already have an account? <Link to="/login" className="font-bold">Login</Link>
                    </div>
                </form>
            </div>
          
        </div>
  )
}

export default Signup
