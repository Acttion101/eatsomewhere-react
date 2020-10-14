import React from 'react';
import Navbar from "../components/Login/Navbar"
import Content from "../components/Login/Content"

function Login() {
    return (     
        <div className="login-container">
            <Navbar />
            <Content />
        </div>   
    );
}

export default Login;
