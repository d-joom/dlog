import React from 'react';
import Logo from '../img/logo.png';
import { Link } from 'react-router-dom';

const login = () => {
    return (
        <div id="login">
            <div className="login_wrap">
                <h1>Welcome!</h1>
                <p>Sign in to your account</p>
                <div className="login_input_wrap">
                    <div className="id_input">
                        <input placeholder='id'></input>
                    </div>
                    <div className="password_input">
                        <input placeholder='password'></input>
                    </div>
                </div>
                <button className="login_btn">LOGIN</button>
            </div>
        </div>
        
    );
};

export default login;