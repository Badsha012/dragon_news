import React, { use } from 'react';
import userImg from '../assets/user.png'
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Provider/Authprovider';

const Navbar = () => {
    const {user}=use(AuthContext)
    return (
        <div className='flex justify-between items-center'>
           <div className=''>{user && user.email } </div>
           <div className='nav flex gap-5 text-accent'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/career">Career</NavLink>


           </div>
           <div className='login-btn flex gap-5'>
            <Link to="/auth/login" className='btn btn-primary px-10'>Login</Link>
            <img src={userImg} alt=""  />
           </div>

        </div>
    );
};

export default Navbar;

