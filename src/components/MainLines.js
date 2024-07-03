import React from 'react'

const MainLines = ({text,bgcolor}) => {
  return (
    <div className='w-12/12 h-full flex'>
        
    <div className='flex justify-center items-center bg-amber-800 w-full mt-10 h-full '>
        <h1 className='font-bold text-2xl text-white'>{text}</h1>
    </div>

    

    </div>
  )
}

export default MainLines
