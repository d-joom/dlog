import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Logo from '../img/logo.png';
import { Link } from 'react-router-dom';

const Login = () => {

    const [login, setLogin] = useState({
        id : "",
        password : ""
    });

    login = () => {
        axios
            .get("https://jsonplaceholder.typicode.com/posts",
            {
                email: login.id,
                password: login.password
            },{
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                }
            })
            .then(response => {
                setUsers(response.data);
            }).catch(e => {
                console.error(e);
            });
    }

    const onIdHandler = (e) => {
        setLogin(login => ({...login, id: e.currentTarget.value}));
    }

    const onPasswordHandler = (e) => {
        setLogin(login => ({...login, password: e.currentTarget.value}));
    }

    return (
        <div id="login">
            <div className="login_wrap">
                <h1>Welcome!</h1>
                <p>Sign in to your account</p>
                <div className="login_input_wrap">
                    <div className="id_input">
                        <input type="text" placeholder="id" value={login.id} onChange={onIdHandler}></input>
                    </div>
                    <div className="password_input">
                        <input type="text" placeholder="password" value={login.password} onChange={onPasswordHandler}></input>
                    </div>
                </div>
                <button className="login_btn">LOGIN</button>
            </div>
        </div>
        
    );
};

export default Login;