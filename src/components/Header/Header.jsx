import React from 'react';
import profile from '../../assets/images/profile.png'
const Header = () => {
  return (
    <div className='text-4xl font-bold flex justify-between items-center mx-80 mt-8 border-b-2 pb-5'>
      <h1>Knowledge cafe</h1>
      <img src={profile} alt="Profile Images" />
    </div>
  );
};

export default Header;