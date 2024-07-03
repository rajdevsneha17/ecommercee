import React from 'react';
import { Link } from 'react-router-dom';

const Photos = ({ img1, img2, img3, img4 }) => {
  return (
    <div className='flex w-full gap-30'>
      <div className='flex'>
        <Link to="/home">
          <img src={img1} alt="img1" className='transition-transform duration-300 transform hover:scale-110 cursor-pointer' />
        </Link>

        <Link to="/home">
          <img src={img2} alt="img2" className='transition-transform duration-300 transform hover:scale-110 cursor-pointer' />
        </Link>

        <Link to="/home">
          <img src={img3} alt="img3" className='transition-transform duration-300 transform hover:scale-110 cursor-pointer' />
        </Link>

        <Link to="/home">
          <img src={img4} alt="img4" className='transition-transform duration-300 transform hover:scale-110 cursor-pointer' />
        </Link>

        <Link to="/home">
          <img src={img4} alt="img4" className='transition-transform duration-300 transform hover:scale-110 cursor-pointer' />
        </Link>

        <Link to="/home">
          <img src={img4} alt="img4" className='transition-transform duration-300 transform hover:scale-110 cursor-pointer' />
        </Link>
      </div>
    </div>
  );
};

export default Photos;
