import React, { useState } from 'react';
import { IoMdMenu } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setIsDrawerOpen } from '../store/globalSlice';



const Navbar = () => {

  const dispatch = useDispatch();

  const handleMenuClick = ()=>{
    dispatch(
      setIsDrawerOpen()
    )
  }

  return (
    <nav>
      <IoMdMenu className='menu-icon' onClick={handleMenuClick}/>
      <Link to={'/home'} className='h2'>CoachingDetail</Link>
      <img src="https://coachingdetail.com/assets/logo.jpeg" alt="" />
      <p>Tutor</p>
    </nav>
  );
};

export default Navbar;
