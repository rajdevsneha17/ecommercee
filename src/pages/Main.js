import React from 'react'

import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Slider2 from "../components/Slider2"
import top1 from "../assets/top brands.avif"
import top2 from "../assets/top barands2.avif"
import to3 from "../assets/to3.avif"
import top4 from "../assets/top4.avif"
import top5 from "../assets/top5.avif"
import MainLines from '../components/MainLines'
import Photos from '../components/Photos'
import Eth1 from "../assets/Ethnic1.webp"
import Eth2 from "../assets/Ethnic2.webp"
import Eth3 from "../assets/Ethnic3.jpg"
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
const Main = () => {
  return (
    <div className='w-12/12 h-screen bg-slate-400'>
      <div>
        <Slider2></Slider2>
      </div>

      <div>
        <MainLines text={"Top Brands"}></MainLines>
      </div>

      <div>
        <div><img src={top1}></img></div>
        
      </div>

      <div className='lg:flex md:flex justify-center items-center'>
      <div className='flex justify-center items-center'>
      <Link to="/home"><div className='hover:shadow-lg transition duration-300'><img src={top2}></img></div></Link>
      <Link to="/home"><div className='hover:shadow-lg transition duration-300'><img src={to3}></img></div></Link>
      <Link to="/home"><div className='hover:shadow-lg transition duration-300'><img src={top4}></img></div></Link>
      <Link to="/home"><div className='hover:shadow-lg transition duration-300'><img src={top5}></img></div></Link>
      </div>

      </div>
      <div className='mt-10'><Slider></Slider></div>

      <div className='mt-10'>
      <Link to="/main"><Photos img1={top2} img2={top2} img3={to3} img4={top4}></Photos></Link>
      </div>

      <div>
      <Link to="/main"><Photos img1={top2} img2={top2} img3={to3} img4={top4} ></Photos></Link>
      </div>

      <div>
        <MainLines text={"ETHNIC WEAR"}></MainLines>
      </div>
      <div className='flex lg:flex-row flex-col gap-28 justify-center items-center'>
        <Link to="/home"><div className='hover:shadow-lg transition duration-300'>
            <img src={Eth1}></img>
        </div></Link>

        <Link to="/home"> <div className='hover:shadow-lg transition duration-300'>
            <img src={Eth2}></img>
        </div></Link>

        <Link to="/home"><div className='hover:shadow-lg transition duration-300'>
            <img src={Eth3}></img>
        </div></Link>
      </div>
      <div>
       
      </div>
      <Footer></Footer>
    </div>

    
  )
}

export default Main
