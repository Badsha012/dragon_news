import React from 'react';
import logo from "../assets/logo.png";

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-3'>
            <img src={logo} className='w-[350px]' alt=""/>
            <p className='text-gray-400'>Journalism Without Fear or Favour</p>
        </div>
    );
};

export default Header;