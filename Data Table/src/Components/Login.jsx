import axios from 'axios';
import React, { useState } from 'react';
import './Home.css';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const userdata = {
            email,
            password
        };

        axios.post("https://reqres.in/api/login", userdata)
            .then((res) => {
                const tokenFromReqres = res.data.token;
                localStorage.setItem("token", tokenFromReqres);
                window.location.href = "/product";
            })
            .catch((err) => console.log(err));
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.href = "/login";
    };

    return (
        <div className="login-container">
            <h1>Login Page</h1>
            <form className="login-form" onSubmit={handleSubmit}>
                <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter Your Email" />
                <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter Your Password" />
                <input type="submit" value="Login" />
                <button type="button" onClick={handleLogout}>Logout</button>
            </form>
        </div>
    );
};

export default Login;
