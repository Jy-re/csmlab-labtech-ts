import React from 'react';
import { Link } from 'react-router-dom';
import LogoBig from '../../Assets/images/Logo-dako.png';

function Login() {

    return (
        <div className="loginPageContainer">
            <div className="biglogoContainer">
                <img src={LogoBig}></img>
            </div>
            <div className='loginBoxContainer'>
                <div className="loginBox">
                    <div className='labelContainer'>
                        <label className='loginLabel'>Username</label>
                    </div>
                    <div className='inputContainer'>
                        <input placeholder="Username" className='loginInput'></input>
                    </div>
                    <div className='labelContainer'>
                        <label className='loginLabel'>Password</label>
                    </div>
                    <div className='inputContainer'>
                        <input placeholder="Password" className='loginInput'></input>
                    </div>
                    <div className="loginButtonContainer">
                        <Link to="/dashboard">
                        <button className="loginButton">Login</button>
                        </Link>
                    </div>
                </div>
                </div>
        </div>
    );
}

export default Login;