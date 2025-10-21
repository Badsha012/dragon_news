import React, { createContext, useState } from 'react';

 export const AuthContext=createContext();

const Authprovider = ({children}) => {
    const [user,setUser]=useState({
        name:"Badsha",email:"badsha@gmail.com",
    });
    const authData={
        user,
        setUser,
    }

    return <AuthContext value={authData}>{children}</AuthContext>
        
};

export default Authprovider;