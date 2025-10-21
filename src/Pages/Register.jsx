import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
         <div className='flex justify-center min-h-screen items-center'>
            <div div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className='text-2xl font-semibold text-center'>Register your account</h2>
      <div className="card-body">
        <fieldset className="fieldset">
            {/* Name */}
             <label className="label">Name</label>
          <input type="text" className="input" placeholder="Enter your Name" />

          {/* photo URl */}
                  <label className="label">Photo URL</label>
          <input type="text" className="input" placeholder="Photo url" />

            {/* email */}
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          {/* password */}
          <label className="label">Password</label>

          <input type="password" className="input" placeholder="Password" />
         
       

          <button className="btn btn-neutral mt-4">Register</button>

             <p className='text-center pt-5 '>Allready Have An Account ? <Link to='/auth/login' className='text-secondary font-semibold'>Login</Link> </p>
        </fieldset>
      </div>
      </div>
    
  
            
        </div>
    );
};

export default Register;