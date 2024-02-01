import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { post } from '../services/apiService';

const Login = () => {

    const [login, setLogin] = useState({
        id : "",
        password : ""
    });

    const navigate = useNavigate();

    const fetchLogin = async () => {
        try {
            const data = await post(`/login`, {
                userId: login.id,
                password: login.password
             });
            localStorage.setItem('accessToken', data);
        } catch (error) {
          console.error('Error fetching users:', error);
          // 오류 처리
        }
    };

    const onLogin = () => {

        fetchLogin().then(() => {
            navigate(`/${login.id}`, {
            });
        });
        // axios
        //     .post("/login",
        //     {
        //         userId: login.id,
        //         password: login.password
        //     },{
        //         headers: {
        //             "Content-Type": "application/json",
        //             Accept: "application/json",
        //         }
        //     })
        //     .then(response => {
        //         localStorage.setItem('accessToken', response.data);
        //     })
        //     .then(
        //         console.log(localStorage.getItem("login-token"))
        //     )
        //     .catch(e => {
        //         console.log("---------------");
        //         console.error(e);
        //     });

        //     navigate(`/${login.id}`, {
        //     });
    }

    const onChange = (e) => {
        const {value, name} = e.target;
        setLogin({
            ...login,
            [name] : value
        });
    };

    const onSubmitHandler = (e) => {
        //버튼 리프레시 방지
        e.preventDefault();
        let body = {
            id: login.id,
            password: login.password
        }
        console.log(login);
        onLogin();
        
    }

    return (
        <div id="login">
            <div className="login_wrap">
                <h1>Welcome!</h1>
                <p>Sign in to your account</p>
                <form onSubmit={onSubmitHandler}>
                    <div className="login_input_wrap">
                        <div className="id_input">
                            <input name="id" type="text" placeholder="id" value={login.id} onChange={onChange}></input>
                        </div>
                        <div className="password_input">
                            <input name="password" type="password" placeholder="password" value={login.password} onChange={onChange}></input>
                        </div>
                    </div>
                    <button type="submit" className="login_btn">LOGIN</button>
                </form>
            </div>
        </div>
        
    );
};

export default Login;